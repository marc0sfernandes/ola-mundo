import Post from "componentes/Post";
import posts from 'json/posts.json';
import styles from './inicio.module.css';

export default function Inicio() {
    return (
            <ul className={styles.posts}>
                {posts.map((post)=>(
                    <li key={post.id}>
                        <Post post={post}/>
                    </li>
                ))}
            </ul>
    )
}