import React from 'react';
import { 
    ScrollPage, 
    Animator,
    batch,
    Fade,
    Sticky,
    FadeIn,
    MoveIn,
    MoveOut,
    StickyIn,
    ZoomIn 
} from 'react-scroll-motion'

import { TiSocialLinkedin } from 'react-icons/ti'
import { FiMail, FiGithub } from 'react-icons/fi'
import './index.css'
const Contact =()=>{
    const handleContactClick = (url) =>{
        const win = window.open(url, '_blank')
        win.focus()

    }
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())

    return (
        <><ScrollPage page={5}>
            <Animator animation={ZoomInScrollOut}>
                <div className="section-title contact">
                    contact
                </div>
                
            </Animator>
        </ScrollPage>
        <ScrollPage page={6}>



                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: "center",
                    height: '100%'
                }}>
                    <span style={{ fontSize: '40px' }}>
                        {/* linkedin link */}
                        <Animator animation={MoveIn(1000, 0)}>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }} onClick={() => handleContactClick('https://www.linkedin.com/in/lina-ova/')}>

                                <TiSocialLinkedin color='black' className='contact-list-icon' />
                                <p>Polina Nazarova</p>


                            </div>
                        </Animator>
                        {/* github link */}
                        <Animator animation={MoveIn(-1000, 0)}>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }} onClick={() => handleContactClick('https://github.com/lina-ova')}>
                                <FiGithub color='black' className='contact-list-icon' />

                                <p>lina-ova</p>
                            </div>
                        </Animator>
                        {/* mail */}
                        <Animator animation={MoveOut(1000, 0)}>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }} onClick={() => handleContactClick('mailto:polina.w.nazarova@helsinki.fi')}>
                                    
                                <FiMail color='black' className='contact-list-icon' />

                                <p>polina.w.nazarova@helsinki.fi</p>
                            </div>
                        </Animator>
                    </span>
                </div>
            </ScrollPage></>
    )
}

export default Contact;