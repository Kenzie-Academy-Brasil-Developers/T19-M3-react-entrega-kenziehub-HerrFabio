import { z } from "zod";

export const formSchema = z.object({
    name: z.string().nonempty("Nome é obrigatório"),
    email: z.string().nonempty("E-mail é obrigatório").email("Forneça um e-mail válido."),
    password: z.string().nonempty("Senha é obrigatório")
                .min(6, "É necessário no mínimo seis caracteres.")
                .regex(/(?=.*?["A-Z"])+/, "É necessário no mínimo uma letra maiúscula.")
                .regex(/(?=.*?["a-z"])+/, "É necessário no mínimo uma letra minúscula.")
                .regex(/(?=.*?["0-9"])+/, "É necessário no mínimo um número.")
                .regex(/(?=.*?[#?!@$%^&*-])+/, "É necessário no mínimo um caractere especial."),
    confirmPassword: z.string().nonempty("confirmar a senha é obrigatório"),
    biography: z.string().nonempty ("Descrição obrigatória"),
    text: z.string().nonempty ("Números de telefone, rede social ou outra forma de contato obrigatória"),
    course_module: z.string().nonempty ("Escolha de módulo obrigatória")
}).refine(({password, confirmPassword}) => password === confirmPassword, {
    message: "As senhas não são iguais.",
    path: ["confirmPassword"],
});