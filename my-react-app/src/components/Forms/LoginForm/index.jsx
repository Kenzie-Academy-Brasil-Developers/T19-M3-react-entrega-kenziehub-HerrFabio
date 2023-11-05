import { useNavigate } from "react-router-dom";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../../loginFormSchema";


export default () => {

     const {register, handleSubmit, formState: {errors},} = useForm ({
        resolver: zodResolver(loginFormSchema),
     });

    const navigate = useNavigate();

 
     const submit = (formData) => {
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input label="Email" type="email" id="email" {...register("email")} error={errors.email}/>
            <Input label="Senha" type="password" id="password" {...register("password")} error={errors.password}/>

            <div>
                <button onClick={() => navigate("/register")}>Cadastre-se</button>
                <button type="submit">Entrar</button>
            </div>

        </form>
    )
}