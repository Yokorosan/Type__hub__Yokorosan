import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup
    .string()
    .email("deve ser um e-mail válido")
    .required("Email é Obrigatório"),
  password: yup
    .string()
    .min(8, "No minimo 8 caracteres")
    .required("Senha é Obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha"
    ),
  bio: yup.string().required("Escreve alguma coisa sobre você"),
  contact: yup.string().required("Coloque pelo menos uma forma de contato!"),
});

type RegisterUser = yup.InferType<typeof schema>;
