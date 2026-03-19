import Input from "../components/Input";
import EmailIcon from "../images/email.svg?react"
import PasswordIcon from "../images/password.svg?react"
import AuthLayout from "../components/AuthLayout";

export function Login() {
    return(
    <>
        <AuthLayout
            title="Olá, de novo!"
            subtitle="Por favor, insira os seus dados para fazer login."
        >            
            <Input
                label="E-mail"
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

export default Login;
