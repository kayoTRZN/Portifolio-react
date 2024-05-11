import styles from './Card.module.css'

import ButtonB from './ButtonB'


function Card ({img, title, tech, descripition, repo, site}){
    return( 
        <div className={styles.card}>
            <a target='blank' href={site}> 
                <img src={img}/>


            </a>

           
            <section>
                <h3>{title}</h3>
                <p><strong>tecnologia: </strong>{tech}</p>
                <p>{descripition}</p>
                <ButtonB text='Acesse o repositório' link={repo}/>
            </section>
        </div>
    )
}
export default Card