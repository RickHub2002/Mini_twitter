import Input from "../components/Input";
import EmailIcon from "../images/email.svg?react"
import PasswordIcon from "../images/password.svg?react"
import UserIcon from "../images/user.svg?react"
import AuthLayout from "../components/AuthLayout";

function Cadastro() {
    return(
    <>
        <AuthLayout
            title="Olá, vamos começar!"
            subtitle="Por favor, insira os dados solicitados para fazer cadastro"
        >

        <Input
            label="Nome"
            type="text"
            placeholder="Insira o seu nome"
            icon={UserIcon}
        />

        <Input
            label="Email"
            type="email"
            placeholder="Insira o seu e-mail"
            icon={EmailIcon}
        />

        <Input
            label="Senha"
            type="password"
            placeholder="Insira a sua senha"
            icon={PasswordIcon}
        />

        </AuthLayout>
    </>
    )
}

export default Cadastro;