import { useForm } from "react-hook-form";
 import Input from "../Input";
 import { useNavigate } from "react-router-dom";
 import { zodResolver } from "@hookform/resolvers/zod";
 import { formSchema } from "../../formSchema";
 import { useState } from "react";
 import { api } from "../../../services/api";

 export default () => {
     const { register, handleSubmit, formState: { errors } } = useForm({
        
         resolver: zodResolver(formSchema),
     });

     const [loading, setloading] = useState(false);

     const navigate = useNavigate();

     const userRegister = async (formData) => {
         try {
             setloading(true);
             await api.post("/users", formData);
             navigate("/");
             alert("Cadastro realizado com sucesso!");
         } catch (error) {
             console.log(error);
             if (error.response?.data === "Email alredy exists"){
                 alert("Usuário já cadastrado!");
             }
            
         }finally{
             setloading(false);
         };
     };

      const submit = (formData) => {
         // console.log(formData);
         userRegister(formData);
       
      };
    
     return (
         <form onSubmit={handleSubmit(submit)}>
            
            <Input
                label="Nome"
                type="text"
                id="name"
                placeholder="Digite seu nome aqui"
                {...register("name")}
                error={errors.name}
            />
    
            <Input label="E-mail" type="email" placeholder="Digite seu E-mail" 
            {...register("email")} 
            error={errors.email}
            />

            <Input label="Senha" type="password" placeholder="Digite sua senha" 
            {...register("password")} 
            error={errors.password}
            />

            <Input label="Confirmar Senha" type="password" placeholder="Digite sua senha novamente" 
            {...register("confirmPassword")} error={errors.confirmPassword} 
            />

            <div> <label htmlFor="bio">Bio</label>
                <textarea label="Bio" name="bio"  placeholder="Fale sobre você" 
                {...register("biography")}
                >

                </textarea>
                {errors ? errors.biography?.message : null}
            </div>

            <Input label="Opção de contato" type="contact"  placeholder="Digite seu telefone" 
            {...register("contact")} 
            error={errors.contact}
            />

            <div>
                <label htmlFor="module">Selecionar Módulo</label>
                <select 
                {...register("module")}
                >
                    <option value="">Selecione um módulo</option>
                    <option value="course_module">Primeiro módulo (Introdução ao Frontend)</option>
                    <option value="course_module">Segundo módulo (Frontend Avançado)</option>
                    <option value="course_module">Terceiro módulo (Introdução ao Backend)</option>
                    <option value="course_module">Quarto módulo (Backend Avançado)</option>
                </select>
                {errors ? errors.module?.message : null}
            </div>

            <button onClick={() => navigate("/")}>Voltar</button>
            
            <button  type="submit" disabled={loading}>Cadastrar</button>
        </form>
    );
};