import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Cards'
import lpdnc from '../../img/projects/lp-dnc.png'
import cdp from '../../img/projects/cdp.png'
import port from '../../img/projects/porti.png'


function Projects (){
    return(
        <div className={styles.projects} id='Projects'>
            <h1>Projetos</h1>
            <Card
            img={lpdnc}
            title="LP - DNC"
            tech="HTML, CSS E JS"
            descripition="Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia."
            repo="https://github.com/kayoTRZN/projeto-landing-page"
            site="https://testemyprjdnc.netlify.app"
            />
            <Card
            img={cdp}
            title="cardapio"
            tech="HTML, TAILWIND E JS"
            descripition="Menu interativo elaborado em HTML, Bootstrap e JavaScript, mostrando variedade de pratos, preços e botões de pedido simplificados."
            repo="https://github.com/kayoTRZN/cardapio"
            site="https://firstcdp.netlify.app"
            />
            <Card
            img={port}
            title="Portifolio"
            tech="REACT"
            descripition="Portfólio React com design elegante para mostrar projetos, habilidades e conquistas profissionais de maneira eficaz."
            repo="https://github.com/kayoTRZN/cardapio"
            site="https://firstcdp.netlify.app"
            
            />
            <ButtonB text='Acesse meu repositorio' link='https://github.com/kayoTRZN?tab=repositories' target='blank'/>

        </div>
    )
}
export default Projects