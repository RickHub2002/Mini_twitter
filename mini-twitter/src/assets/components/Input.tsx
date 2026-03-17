//import { LucideIcon } from 'lucide-react'

interface InputProps {
    label: string;
    type: string;
    placeholder: string;
    icon: any;
}

function Input({ label, type, placeholder, icon: Icon }: InputProps) {
    return (
        <div className="flex flex-col w-full">
            <label>{label}</label>
            <div className="relative flex items-center">
                <div className="absolute left-3 text-pink-300">
                    <Icon size={20} />
                </div>
                <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700"
                >
                </input>
            </div>
        </div>
    )
}

export default Input;