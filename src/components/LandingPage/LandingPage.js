import React from 'react';
import styles from "./LandingPage.module.css";
import Selfie from "../UI/Images/About me.JPG";
import PortfolioPic from "../UI/Images/Portfolio pic.png";
import tShirtPic from "../UI/Images/shopping pic.jpg"
import AboutButton from "./AboutButton";


const LandingPage = (props) => {
    return (
        <div >

            {/*<div style={{position: 'relative',zIndex: '2'}}>*/}
            {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem blanditiis debitis distinctio,*/}
            {/*        enim eos excepturi facilis illo iste magni, maiores modi molestiae molestias nisi officia quibusdam*/}
            {/*        quos repellendus sapiente.</p>*/}
            {/*</div>*/}
            <div style={{position: 'relative',zIndex:'3'}}>
                <p style={{padding: '1em', textAlign:'center', zIndex:'3'}}>
                    Welcome! My name is Keaton Hacking. I'm an illustration artist.
                    I specialize in digital media.
                </p>
            </div>


            <div className={styles['landing-page-card']}>
                <img src={Selfie} alt=""/>
                <div style={{margin: '1em', zIndex:'2'}}>
                    <p style={{}}>Learn more about the artist and the inspiration behind his work</p>
                    <button onClick={()=> props.handlePageChange('About Me')}
                            className={styles['landing-page-card-button']}>
                        <AboutButton/>
                    </button>
                </div>
            </div>




            <div className={styles['landing-page-card']}>
                <div style={{ zIndex:'2'}}>
                    <p> Check out pieces done using a mix of charcoal, and digital media. </p>
                    <button  onClick={()=> props.handlePageChange('Portfolio')}
                        className={styles['landing-page-card-button']}>
                        <section
                            className={'gradient-pink-dark-blue'}>
                            Portfolio</section>
                    </button>
                </div>
                <img style={{margin: '1em' }} src={PortfolioPic} alt="" />
            </div>

            <div className={styles['landing-page-card']}>
                <img src={tShirtPic} alt=""/>
                <div style={{margin: '1em', zIndex:'2'}}>
                    <p>about me blah blah blah</p>
                    <button onClick={()=> props.handlePageChange('Shopping')}
                        className={`${styles['landing-page-card-button']}`}>
                        <section className={'gradient-green-light-blue'}>
                            Shopping</section>
                    </button>

                </div>
            </div>

            {/*                       landing page blog elements position absolute                           */}
            <div className={styles['landing-page-blob-1']}></div>
            <div className={styles['landing-page-blob-2']}></div>
            <div className={styles['landing-page-blob-3']}></div>
            <div className={styles['landing-page-blob-4']}></div>


        </div>
    )
}

export default LandingPage;