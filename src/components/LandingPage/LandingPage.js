import React from 'react';
import styles from "./LandingPage.module.css";
import Selfie from "../UI/Images/About me.JPG";
import PortfolioPic from "../UI/Images/Portfolio pic.png";
import tShirtPic from "../UI/Images/shopping pic.jpg"



const LandingPage = (props) => {
    return (
        <div>
                <p style={{padding: '1em', textAlign:'center'}}>
                    Welcome! My name is Keaton Hacking. I'm an illustration artist.
                    I specialize in digital media.
                </p>

            <div className={styles['landing-page-card']}>
                <img src={Selfie} alt=""/>
                <div style={{margin: '1em'}}>
                    <p>about me blah blah blah</p>
                    <button onClick={()=> props.handlePageChange('About Me')}
                            className={styles['landing-page-card-button']}>
                        <section
                        className={'gradient-yellow-pink'}>
                            About Me</section>
                    </button>
                </div>
            </div>


            <div className={styles['landing-page-card']}>
                <div >
                    <p>about me blah blah blah</p>
                    <button onClick={()=> props.handlePageChange('Portfolio')}
                        className={styles['landing-page-card-button']}>
                        <section
                            className={'gradient-pink-dark-blue'}>
                            Portfolio</section>
                    </button>
                </div>
                <img style={{margin: '1em'}} src={PortfolioPic} alt="" />
            </div>



            <div className={styles['landing-page-card']}>
                <img src={tShirtPic} alt=""/>
                <div style={{margin: '1em'}}>
                    <p>about me blah blah blah</p>
                    <button onClick={()=> props.handlePageChange('Shopping')}
                        className={`${styles['landing-page-card-button']}`}>
                        <section className={'gradient-green-light-blue'}>
                            Shopping</section>
                    </button>

                </div>
            </div>


        </div>
    )
}

export default LandingPage;