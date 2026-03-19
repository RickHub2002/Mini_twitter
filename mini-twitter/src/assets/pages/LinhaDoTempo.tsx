import Search from '../images/search.svg?react'
import Logout from '../images/logout.svg?react'
import NovoPost from '../components/NovoPost'
import Post from '../components/Post'

function LinhaDoTempo() {
    return (
        <>
            <section>
                <header>
                    <nav className="flex justify-between">
                        <a>Mini Twitter</a>
                        <div>
                            <Search />
                        </div>
                        <div className="w-10 h-10 bg-blue-500">
                            <Logout />
                        </div>
                    </nav>
                </header>

                <NovoPost />

                <Post />

                <ul>
                    <li>INICIO</li>
                    <li>2</li>
                    <li>3</li>
                    <li>...</li>
                    <li>8</li>
                </ul>

                <footer>
                    <a className="text-titulo">Mini Twitter</a>
                </footer>
            </section>
        </>
    )
}

export default LinhaDoTempo;