import PaginaPadrao from "componentes/PaginaPadrao"
import PostModelo from "componentes/PostModelo"
import posts from "json/posts.json"
import NaoEncontrada from "paginas/NaoEncontrada"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { useParams } from "react-router-dom"
import './post.css'

export default function Post() {
    const parametros = useParams()
    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post) {
        return <NaoEncontrada />
    }

    return (
        <PaginaPadrao>
        <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>
        </PostModelo>
    </PaginaPadrao>
    )
}