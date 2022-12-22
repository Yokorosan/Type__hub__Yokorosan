import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .email("deve ser um e-mail válido")
    .required("Email é Obrigatório"),
  password: yup.string().required("Senha é Obrigatória"),
});
