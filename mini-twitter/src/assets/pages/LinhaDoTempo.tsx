import Search from '../images/search.svg?react'
import Logout from '../images/logout.svg?react'
import NovoPost from '../components/NovoPost'
import Post from '../components/Post'

function LinhaDoTempo() {
    return (
        <>
            <section className=" px-[40px] py-[16px]">
                <header className="flex justify-around border-b">
                    <a>Mini Twitter</a>
                    <div className="">
                        <input type="text" placeholder="Buscar por post" className="relative" />
                        <Search className="absolute left-0" />
                    </div>
                    <div className="w-10 h-10 bg-blue-500">
                        <Logout />
                    </div>
                </header>
                <section className="max-w-[640px] mx-auto my-0">
                    <NovoPost />

                    <Post />

                    <ul>
                        <li>INICIO</li>
                        <li>2</li>
                        <li>3</li>
                        <li>...</li>
                        <li>8</li>
                    </ul>
                </section>

                <footer>
                    <a className="text-titulo">Mini Twitter</a>
                </footer>
            </section>
        </>
    )
}

export default LinhaDoTempo;