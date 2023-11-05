import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().nonempty("E-mail é obrigatório"),
    password: z.string().nonempty("Senha é obrigatória"),
});