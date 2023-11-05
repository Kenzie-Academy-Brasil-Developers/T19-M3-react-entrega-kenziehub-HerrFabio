import { useNavigate } from "react-router-dom";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../../loginForm.schema";
import { useState } from "react";
import { api } from "../../../services/api";

export default () => {

     const {register, handleSubmit, formState: {errors},} = useForm ({
        resolver: zodResolver(loginFormSchema),
     });

     const [loading, setloading] = useState(false);

    const navigate = useNavigate();

    const userRegister = async (formData) => {
        try {
            setloading(true);
            
            const {data} = await api.post("/sessions", formData);
            console.log(data);
            const token = data.token;
            localStorage.setItem("@TOKEN", token);
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
            if (error.response?.data === "Icorrect password") {
                alert("Credenciai incorretas!");
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
            <Input label="Email" type="email" id="email" {...register("email")} error={errors.email}/>
            <Input label="Senha" type="password" id="password" {...register("password")} error={errors.password}/>

            <div>
                <button onClick={() => navigate("/register")}>Cadastre-se</button>
                <button type="submit" disabled={loading}>Entrar</button>
            </div>

        </form>
    )
}