import styles from "./LandingPage.module.css";
import A from "../UI/Images/AboutButton/about-a.png"
import B from "../UI/Images/AboutButton/about-b.png"
import O from "../UI/Images/AboutButton/about-o.png"
import U from "../UI/Images/AboutButton/about-u.png"
import T from "../UI/Images/AboutButton/about-t.png"
import M from "../UI/Images/AboutButton/about-m.png"
import E from "../UI/Images/AboutButton/about-e.png"

export default function AboutButton() {
    return(
        <div className={styles['button-container']}>
            <img className={styles['button-letter']} src={A} alt=""/>
            <img className={styles['button-letter']} src={B} alt=""/>
            <img className={styles['button-letter']} src={O} alt=""/>
            <img className={styles['button-letter']} src={U} alt=""/>
            <img className={styles['button-letter']} src={T} alt=""/>
            <img className={styles['button-letter']} src={M} alt=""/>
            <img className={styles['button-letter']} src={E} alt=""/>

        </div>
    )
}