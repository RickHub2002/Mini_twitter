import Gallery from '../images/gallery_2.svg?react'

function NovoPost() {
    return (
        <div className="flex flex-col p:[16px_16px_16px_16px]">
            <textarea placeholder="E aí, o que está rolando?" className="w-full bg-transparent outline-none resize-none min-h-[60px] p:[16px_16px_74px_16px] border-b pb-2" />
            <div className="flex justify-between">
                <Gallery />
                <button className="
                    w-[92px] h-[33px] 
                    bg-titulo 
                    text-card text-base font-bold 
                    rounded-full 
                    shadow-glow 
                    flex items-center justify-center
                    transition-all duration-200
                    hover:brightness-110 active:scale-[0.98]
                    cursor-pointer
                    "
                >
                    Postar
                </button>
            </div>
        </div>
    )
}

export default NovoPost;