import Like from '../images/Like.svg?react'

function Post() {
    return(
        <div>
            <header>
                <h4>Lucas Costa</h4>
                <span>@lucascosta</span>
                <span>Data atual</span>
            </header>
            <div>
                <h2>Iniciando um novo processo seletivo!</h2>
                <p>Really excited to share what we've been working on. 
                    The team has put in countless hours to make this seamless. 
                    Check out the screenshot below!
                    #product #launch
                </p>
                <img src="../images/container.jpg" className="h-[40px] w-[40px]"/>
            </div>  
            <Like />
        </div>
    )
}

export default Post;