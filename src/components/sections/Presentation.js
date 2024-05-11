import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'



function Presentation (){
    return(
        <div className={styles.presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu portifólio</strong></h4>
            <h1>Olá, eu sou kayo willson!</h1>

            <p>Desenvolvedor Frontend Júnior apaixonado por transformar conceitos<br></br>
             em experiências digitais impactantes, com sólida expertise em<br></br>
             HTML, CSS, JavaScript e React,buscando contribuir de forma proativa e colaborativa<br></br> em projetos inovadores.
            </p>
            <ButtonA link='https://github.com/kayoTRZN' text='Conecte-se comigo!'/>
        </div>
        
    )
}
export default Presentation