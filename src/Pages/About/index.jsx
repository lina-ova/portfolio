import { ScrollPage, Animator, batch, Fade, FadeIn, MoveOut, Sticky, StickyIn, ZoomIn, MoveIn } from 'react-scroll-motion'
import myImg from '../../img/m1.gif'
import cat from '../../img/cat.jpg'
import './index.css'

const Header =()=>{
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())
    return (
        <>
        <ScrollPage page={3}>
            <Animator animation={ZoomInScrollOut}>
                <div className="section-title about-me">
                    About Me
                </div>
            </Animator>
        </ScrollPage>
        <ScrollPage page={4}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(-1000, 500))}>
                <div className="background-image-container-cat">
                    <img src={cat} alt='cat' />  

                </div>
            </Animator>
            <Animator animation={batch(Fade(), Sticky(), MoveIn(-1000, 500))}>
                <div className="background-image-container-girl">
                    <img src={myImg} alt='my picture' />  
                    <div className="black-background1"></div>
                </div>
            </Animator>

            <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 500))}>
            
                <div className="details">
                    <h2 className="gretting">
                        Hi there!
                    </h2>
                    <p className="bio">
                    I am a developer based in Helsinki, Finland. I am currently pursuing a bachelor's degree in computer science at the University of Helsinki. This is my second year of studies.
                    </p>
                    <p className="bio">
                    My endless energy fuels my pursuit of many interests, hobbies, and fields of study. And easily gets me overly thrilled
                    </p>
                    <p className="bio">
                    So far, I've learnt a little bit about <strong>Python, databases, JavaScript, React, and CSS</strong>, and I'm looking for an internship and, ideally, a permanent employment after that.
                    </p>
                    
                </div>
            </Animator>
            </ScrollPage></>
    )
}

export default Header;