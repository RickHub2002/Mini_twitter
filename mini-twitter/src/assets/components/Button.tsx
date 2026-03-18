function Button() {
    return(
        <div className="w-full">
            <button className="w-full h-[56px] 
                    bg-titulo 
                    text-card text-base font-bold 
                    rounded-full 
                    shadow-glow 
                    flex items-center justify-center
                    transition-all duration-200
                    hover:brightness-110 active:scale-[0.98]
                    cursor-pointer" 
            >
                Continuar
            </button>
        </div>
    )
}

export default Button;