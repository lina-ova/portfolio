import { ScrollPage, Animator, batch, Fade, MoveOut, Sticky, } from 'react-scroll-motion'
import headerImage from '../../img/main1.gif'
import './index.css'

const Header =()=>{
    return (
        <ScrollPage page={0}>
                <Animator animation = {batch(Fade(), Sticky(), MoveOut(0, -200))}>
                    <div className="image-container">
                        <img src={headerImage} alt='girl'/>
                        <div className="black-background">
                        </div>
                    </div>
                </Animator>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 0))}>
                    <div className="name">
                        <h2 className="first">Polina</h2>
                    </div>
                </Animator>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(-1650, 0))}>
                    <div className="name">
                        <h2 className="last">Nazarova</h2>
                    </div>
                </Animator>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(-100, 100))}>
                    <div className="position">
                        <div></div>
                        <h2 className="last">developer</h2>
                    </div>
                </Animator>
        </ScrollPage>
    )
}

export default Header;