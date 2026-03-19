import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";

interface AuthLayoutProps {
    children: ReactNode;
    title: string;
    subtitle: string;
}

function AuthLayout({children, title, subtitle}: AuthLayoutProps) {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-fundo">
            <header className="flex flex-col items-center justify-start w-full max-w-[480px] min-h-[640px]">
                <h1 className="text-titulo text-[40px] font-bold mb-[56px]">Mini Twitter</h1>
                <nav className="flex justify-around w-[80%] border-b-2 border-input-border mb-[56px] text-titulo text-base font-bold">
                    <NavLink
                        to="/login"
                        className={({ isActive }) => 
                            `flex-1 text-center pb-4 cursor-pointer transition-colors 
                            ${isActive 
                                ? "text-titulo border-b-4 border-titulo -mb-[2px]"
                                : "text-secundaria hover:text-titulo border-b-4 border-transparent -mb-[2px]"  
                            }
                        `} 
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="/signup"
                        className={({ isActive }) => 
                            `flex-1 text-center pb-4 cursor-pointer transition-colors 
                            ${isActive 
                                ? "text-titulo border-b-4 border-titulo -mb-[2px]"
                                : "text-secundaria hover:text-titulo border-b-4 border-transparent -mb-[2px]"  
                            }
                        `} 
                    >
                        Cadastrar
                    </NavLink>
                </nav>
                <div className="text-left w-full mb-[24px]">
                    <h2 className="text-3xl text-titulo font-bold">{title}</h2>
                    <p className="text-base text-secundaria">{subtitle}</p>
                </div>

                {children}

                <Button />

                <p className="text-principal text-center mt-[40px]">
                    Ao clicar em continuar, você concorda com 
                    nossos Termos de Serviço e Política de Privacidade.
                </p>
            </header>
        </div>
    )
}

export default AuthLayout;