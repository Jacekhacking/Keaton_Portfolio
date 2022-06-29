import styles from "./LandingPage.module.css";


import About from "../UI/Images/About Me.svg"
export default function AboutButton() {
    return(
        <div className={styles['button-container']}>

            <img src={About} alt=""/>
        </div>
    )
}