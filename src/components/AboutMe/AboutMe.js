import React, {Fragment} from 'react';
import styles from "./AboutMe.module.css";
import AboutPicture from "../UI/Images/About me.JPG"

const AboutMe = () => {
    return (
        <Fragment>
            <h2 className={`fs-700  gradient-yellow-pink`} style={{textAlign:'center'}}>About Me</h2>
            <div>
                <p>
                    <img className={styles['about-me-image']}
                         src={AboutPicture}
                         style={{}} alt=""/>
                    lorem alkdjf ag jalksgjkla gsdajlkagd agsjklads
                    lorem alkdjf ag jalksgjkla gsdajlkagd agsjklads
                    lorem alkdjf ag jalksgjkla gsdajlkagd agsjklads
                    lorem alkdjf ag jalksgjkla gsdajlkagd agsjklads
                    lorem alkdjf ag jalksgjkla gsdajlkagd agsjklads
                    lorem alkdjf ag jalksgjkla gsdajlkagd agsjklads
                    lorem alkdjf ag jalksgjkla gsdajlkagd agsjklads
                    lorem alkdjf ag jalksgjkla gsdajlkagd agsjklads
                    lorem alkdjf ag jalksgjkla gsdajlkagd agsjklads
                    lorem alkdjf ag jalksgjkla gsdajlkagd agsjklads
                </p>
            </div>



        </Fragment>
    )
}

export default AboutMe;