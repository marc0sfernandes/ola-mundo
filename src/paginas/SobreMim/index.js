import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from 'assets/sobre_mim_foto2.jpeg';
import PostModelo from "componentes/PostModelo";
import styles from './SobreMim.module.css';

export default function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
            <h3 className={styles.subtitulo}>Olá, eu sou o Marcos!</h3>
            <img src={fotoSobreMim} alt="Foto do Marcos Fernandes sorrindo" className={styles.fotoSobreMim} />
            <p className={styles.paragrafo}>Meu nome é Marcos Fernandes e tenho 22 anos.</p>
            <p className={styles.paragrafo}>Sou apaixonado por jogos, música e filmes, além de ter um grande interesse pela programação.</p>
            <p className={styles.paragrafo}>Sou natural do interior do Rio Grande do Norte e estou empenhado em expandir meus conhecimentos nessa área.</p>
            <p className={styles.paragrafo}>Tenho uma afinidade especial pela programação. Atualmente, estou aprendendo sobre programação por meio da plataforma da Alura, e já adquiri conhecimentos em HTML, CSS, JavaScript, Git/GitHub. Estou focado em dominar o React, expandindo minhas habilidades e aprofundando meu conhecimento nessa área.</p>
            <p className={styles.paragrafo}>Estou determinado a trilhar um caminho promissor no mundo da tecnologia. A programação me fascina, e acredito que posso criar experiências envolventes e soluções criativas para desafios complexos. Com minha constante busca por conhecimento e o desenvolvimento contínuo de minhas habilidades, tenho certeza de que deixarei minha marca no universo da tecnologia.</p>

        </PostModelo>

    )
}