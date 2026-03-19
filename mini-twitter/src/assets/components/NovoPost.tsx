import Gallery from '../images/gallery.svg?react'

function NovoPost() {
    return(
        <div>
            <input type="text" placeholder="E aí, o que está rolando?" className="p:[16px_16px_74px_16px] border-b pb-2" />
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
    )
}

export default NovoPost;