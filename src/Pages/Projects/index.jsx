import { ScrollPage, Animator, batch, Fade, FadeIn, MoveOut, Sticky, StickyIn, ZoomIn } from 'react-scroll-motion'
import work from './constants'
import './index.css'


const Projects=()=> {

    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())
  return (
    <><ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
              <div className="section-title">
                  Portfolio
              </div>
          </Animator>
      </ScrollPage><ScrollPage page={2}>
              <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                  <div className="portfolio-content">
                      {work?.map((work, index) => {
                          return (
                              <a href={work?.link} target='_blank' key={work?.name}>
                                  <div className="portfolio-card">
                                      <div className="project-image">
                                          <img src={work?.imageSrc} alt={work?.name} />
                                      </div>
                                      <div className="portfolio-title">
                                          <h3>{work?.name}</h3>
                                          {work?.code && <a href = {work?.code} target='_blank'>COde</a>}
                                      </div>
                                      <div className="count">
                                          {index}
                                      </div>
                                  </div>
                              </a>
                          )
                      })}
                  </div>
              </Animator>
          </ScrollPage></>
  )
}

export default Projects;