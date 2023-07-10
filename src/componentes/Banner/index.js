import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpeg'
import styles from './banner.module.css'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá mundo</h1>
                <p className={styles.paragrafo}>Boas vindas ao meu espaço pessoal! Eu sou Marcos Fernandes,estudante de programação. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)</p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} alt='circulo colorido' aria-hidden={true} />
                <img className={styles.minhaFoto} src={minhaFoto} alt='minha foto' />
            </div>
        </div>
    )
}