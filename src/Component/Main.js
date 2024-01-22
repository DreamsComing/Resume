import React, {useState, useEffect} from 'react'
import "./Main.css"
import vidio from "./vidio/VidioResume.mp4"
import carProject from "../Component/img/CarProject.png"
import BurgerShop from "../Component/img/burger_shop_project.png"


function Main() {
  const [opacity, setOpacity] = useState(0)
  const [opacitySecondImg, setOpacitySecondImg] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTOp
      const heightOfScreen = window.innerHeight  

      const threshold = 700;
  if (heightOfScreen <= 1800) {
      if (scrollY >= threshold) {
        setOpacity(1)
      } else {
        setOpacity(0)
      };
  } else {
    setOpacity(1)
  }

    }
    

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTOp
      const heightOfScreen = window.innerHeight

      const threshold = 1300;
      if (heightOfScreen < 1800) {
        if (scrollY >= threshold) {
          setOpacitySecondImg(1)
        } else {
          setOpacitySecondImg(0)
        };
    } else {
      setOpacitySecondImg(1)
  }

    }
    

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <main>
        <div className='Introduce'>
              <div className='NameBlock'>
                  <h1><span className='Name'>Maksym</span> Trukhan</h1>
                  <h3 className='tittleJob'>Front-End Developer</h3>
                  <hr className='line'/>
              </div>
              <div className='ExtraInformation'>
                <p>
                      
                      Hello, my name is Maksym. I have been studying front-end development for about 2 years. During this time,
                      I have become proficient in working with React, HTML, and CSS. I am now looking for more experience and the opportunity to work with a team that can provide me with new knowledge and where I can continue to improve myself. I hope you consider hiring me for the job,
                      and together, we can do great work!
                </p>
              </div>
        </div>
          {/* - */}
        <div className='Experience'>
              <div className='tittleExperience'>
                  <h3 className='tittleExperience'>Experience</h3>
                  <hr className='lineExperience'/>
              </div>
        </div>
          {/* - */}
          <div>
              <div className='VidioBlock'>
                <video  controls >
                    <source src={vidio} type="video/mp4"/>
                  </video>
              </div>
          </div>
          {/* - */}
          <div className='project_Block'>
            <div className='Block_project_car'  >
                  <hr className='Line_Shelf' />
                <div className='BLockImg' style={{opacity: opacity, transition:'all 1s ease-in-out 0s'}}>
                    <a className='linkImg' href='https://bejewelled-daifuku-801571.netlify.app'>
                        <img className='projectPhoto' src={ carProject } />
                    </a>

                </div>
            </div>
              <div className='Block_project_burgerShop'>
                  <hr className='Line_Shelf' />
                <div className='BLockImg' style={{opacity: opacitySecondImg, transition:'all 1s ease-in-out 0s'}}>
                    <a className='linkImg' href='https://burgershopmenu.netlify.app'>
                        <img className='projectPhoto' src={ BurgerShop } />
                    </a>
                </div>
              </div>
              
          </div>
    </main>
  )
}

export default Main
