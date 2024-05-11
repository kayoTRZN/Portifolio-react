import styles from './Skills.module.css'
import html from '../../img/skills/html.svg'
import css from '../../img/skills/css.svg'
import js from '../../img/skills/js.svg'
import ract from '../../img/skills/react.svg'
import ts from '../../img/skills/ts.svg'

function Skills (){
    return(
        <div className={styles.skill} id="Skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais Habilidades e conhecimento.</p>
            <div>
                <img src={html}/>
                <img src={css}/>
                <img src={js}/>
                <img src={ract}/>
                <img src={ts}/>
            </div>
        </div>
    )
}
export default Skills