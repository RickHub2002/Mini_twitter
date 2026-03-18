//import { LucideIcon } from 'lucide-react'
import type { FunctionComponent, SVGProps } from 'react'

type ReactSVGComponent = FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;

interface InputProps {
    label: string;
    type: string;
    placeholder: string;
    className: string;
    icon: ReactSVGComponent;
}

function Input({ label, type, placeholder, className, icon: Icon }: InputProps) {
    return (
        <div className="flex flex-col w-full gap-2 mb-[20px]">
            <label className="text-secundaria text-sm font-base">{label}</label>
            <div className="relative flex items-center">
                <div className="absolute right-3 text-pink-300">
                    <Icon className="w-5 h-5 hover:border-1" />
                </div>
                <input
                    type={type}
                    placeholder={placeholder}
                    className={className}
                >
                </input>
            </div>
        </div>
    )
}

export default Input;