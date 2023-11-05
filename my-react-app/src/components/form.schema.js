import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.string().min(1, "E-mail é obrigatório").email("Forneça um e-mail válido"),
    password: z.string()
        .min(6, "É necessário no mínimo seis caracteres.")
        .regex(/(?=.*[A-Z])/, "É necessário no mínimo uma letra maiúscula.")
        .regex(/(?=.*[a-z])/, "É necessário no mínimo uma letra minúscula.")
        .regex(/(?=.*[0-9])/, "É necessário no mínimo um número.")
        .regex(/(?=.*[#?!@$%^&*-])/, "É necessário no mínimo um caractere especial."),
    confirmPassword: z.string("confirmar a senha é obrigatório"),
    bio: z.string("Descrição obrigatória"),
    contact: z.string("Números de telefone, rede social ou outra forma de contato obrigatória"),
    course_module: z.enum(["frontend_intro", "frontend_advanced", "backend_intro", "backend_advanced"], {
        message: "Escolha de módulo inválida",
    }),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não são iguais.",
    path: ["confirmPassword"],
});
