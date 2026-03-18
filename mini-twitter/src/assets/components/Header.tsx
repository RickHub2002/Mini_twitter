import Button from "./Button";
import Input from "./Input";
import EmailIcon from "../images/email.svg?react"
import PasswordIcon from "../images/password.svg?react"

function Header() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-fundo">
            <header className="flex flex-col items-center justify-start pt-30 w-full max-w-[480px] min-h-[640px]">
                <h1 className="text-titulo text-[40px] font-bold mb-[56px]">Mini Twitter</h1>
                <nav className="flex justify-around w-[80%] mb-[56px] text-titulo text-base font-bold">
                    <a className="hover:underline decoration-solid">Login</a>
                    <a className="hover:underline decoration-solid">Cadastrar</a>
                </nav>
                <div className="text-left w-full mb-[24px]">
                    <h2 className="text-3xl text-titulo font-bold">Olá, de novo!</h2>
                    <p className="text-base text-secundaria">Por favor, insira os seus dados para fazer login.</p>
                </div>


                <Input
                    label="E-mail"
                    type="email"
                    placeholder="Insira o seu e-mail"
                    className="w-full max-w-[480px] bg-input border border-input-border rounded-lg h-[57px] p-[15px_16px_16px_16px]"
                    icon={EmailIcon}
                />
                <Input 
                    label="Senha"
                    type="password"
                    placeholder="Insira a sua senha"
                    className="w-full max-w-[480px] bg-input border border-input-border rounded-lg h-[57px] p-[15px_16px_16px_16px]"
                    icon={PasswordIcon}
                />

                <Button />

                <p className="text-gray-500">
                    Ao clicar em continuar, você concorda com 
                    nossos Termos de Serviço e Política de Privacidade.
                </p>
            </header>
        </div>
    )
}

export default Header;