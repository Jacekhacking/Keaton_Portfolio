import React, {Fragment} from "react";
import styles from "./Portfolio.module.css";
import portPic_1 from "../UI/Images/portfolio Images/Portfolio_1.png"
import portPic_2 from "../UI/Images/portfolio Images/Portfolio_2.png"
import portPic_3 from "../UI/Images/portfolio Images/Portfolio_3.png"
import portPic_4 from "../UI/Images/portfolio Images/Portfolio_4.png"
import portPic_5 from "../UI/Images/portfolio Images/Portfolio_5.png"
import portGif from "../UI/Images/portfolio Images/Adore-You .gif"

const Portfolio = () => {
    return(<Fragment>

        <h2 className={'gradient-yellow-pink fs-700'} style={{textAlign:'center'}}>Portfolio</h2>
        <div className={'flex wrap '} style={{justifyContent:'center'}}>
            <img className={styles['portfolio-container-portrait']} src={portPic_1} alt=""/>
            <img className={styles['portfolio-container-portrait']} src={portPic_2} alt=""/>
            <img className={styles['portfolio-container-portrait']} src={portPic_5} alt=""/>
            <img className={styles['portfolio-container-landscape']} src={portPic_3} alt=""/>
            <img className={styles['portfolio-container-landscape']} src={portPic_4} alt=""/>
            <img className={styles['portfolio-container-landscape']} src={portGif} alt=""/>
        </div>
        </Fragment>
    )
}

export default Portfolio;