import styles from './Footer.module.css'
import { FaInstagram, FaGithub, FaLinkedin,  } from "react-icons/fa";

function Footer (){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/kayo_tatto/'> <FaInstagram size={30}/></a> </li>
                <li><a href='https://github.com/kayoTRZN'> <FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/kayo-wilson-192b70301/'> <FaLinkedin size={30}/></a></li>
            </ul>
            <p>Kayowilsontrb@gmail.com</p>
            <p>kayo willson © 2024</p>
        </div>
    )
}
export default Footer