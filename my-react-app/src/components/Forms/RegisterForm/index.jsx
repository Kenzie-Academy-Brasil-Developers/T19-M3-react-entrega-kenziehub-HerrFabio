import { useForm } from "react-hook-form";
import Input from "../Input";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../../form.schema";
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
            console.log(formData)
            await api.post("/users", formData);
            navigate("/");
            alert("Cadastro realizado com sucesso!");
        } catch (error) {
            console.log(error);
            if (error.response?.data === "Email alredy exists") {
                alert("Usuário já cadastrado!");
            }

        } finally {
            setloading(false);
        };
    };

    const submit = (formData) => {

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
            />
            {errors.name && <p>{errors.name.message}</p>}


            <Input label="E-mail" type="email" placeholder="Digite seu E-mail"
                {...register("email")}
            />
            {errors.email && <p>{errors.email.message}</p>}


            <Input label="Senha" type="password" placeholder="Digite sua senha"
                {...register("password")}
            />
            {errors.password && <p>{errors.password.message}</p>}

            <Input label="Confirmar Senha" type="password" placeholder="Digite sua senha novamente"
                {...register("confirmPassword")}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

            <div> <label htmlFor="bio">Bio</label>
                <textarea label="Bio" name="bio" placeholder="Fale sobre você"
                    {...register("bio")}
                >

                </textarea>
                {errors ? errors.bio?.message : null}
            </div>

            <Input label="Opção de contato" type="contact" placeholder="Digite seu telefone"
                {...register("contact")}
                {...errors.contact && <p>{errors.contact.message}</p>}
            />

            <div>
                <label htmlFor="course_module">Selecionar Módulo</label>
                <select {...register("course_module")}>
                    <option value="">Selecione um módulo</option>
                    <option value="frontend_intro">Primeiro módulo (Introdução ao Frontend)</option>
                    <option value="frontend_advanced">Segundo módulo (Frontend Avançado)</option>
                    <option value="backend_intro">Terceiro módulo (Introdução ao Backend)</option>
                    <option value="backend_advanced">Quarto módulo (Backend Avançado)</option>
                </select>
                {errors ? errors.course_module?.message : null}
            </div>

                <button onClick={() => navigate("/")}>Voltar</button>

                <button type="submit" disabled={loading}>Cadastrar</button>
        </form>
    );
};