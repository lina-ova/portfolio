import { ScrollPage, Animator, batch, Fade, FadeIn, MoveOut, Sticky, StickyIn, ZoomIn, MoveIn } from 'react-scroll-motion'
import myImg from '../../img/m1.gif'
import cat from '../../img/cat.jpg'
import './index.css'

const Header = () => {
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
                            I’m a developer based in Helsinki, Finland, with a background in Computer Science from the University of Helsinki                        </p>
                        <p className="bio">
                            I’m driven by curiosity, with an endless energy that fuels my interests, hobbies, and passion for learning.
                        </p>
                        <p className="bio">
                            So far, I've explored <strong>Python, Kotlin, JavaScript, React, and PostgreSQL</strong>, and I’m looking for an internship with the potential to lead to a permanent role.
                        </p>

                    </div>
                </Animator>
            </ScrollPage></>
    )
}

export default Header;