import Button from "./Button";
import Input from "./Input";
import { Mail, Lock} from 'lucide-react';

function Header() {
    return (
        <div className="md:flex min-h-screen w-full items-center justify-center bg-gray-100">
            <header className="flex flex-col items-center justify-start pt-30 w-full max-w-[480px] min-h-[640px] bg-red-300">
                <h1>Mini Twitter</h1>
                <nav>
                    <a>Login</a>
                    <a>Cadastrar</a>
                </nav>
                <h2>Olá, de novo!</h2>
                <p>Por favor, insira os seus dados para fazer login.</p>

                <Input
                    label="E-mail"
                    type="email"
                    placeholder="Digite seu e-mail"
                    icon={Mail}
                />
                <Input 
                    label="Senha"
                    type="password"
                    placeholder="Digite sua senha"
                    icon={Lock}
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