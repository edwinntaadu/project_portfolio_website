import React from 'react'
import AboutImage from '../../assets/about.jpg'
import data from './data'
import Card from '../../components/Card'
import './about.css'
{/*import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi' */}

const About = () => {
  return (
    <section id="about" data-aos='fade-in'>
      <div className='container about__container'>
        <div className='about__left'>
          <div className='about__portrait'>
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className='about__right'>
          <h2>About Me</h2>
          <div className='about__cards'>
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
            Building projects my clients love have always been my passion.
            Being in the web development industry for 2 years and serving 
            more than 40 happy clients worldwide.
            I am always moltivated to do more!
          </p>
          <p>
            Hi, my name is Edwin Ntaadu living in Berlin, Germany. I am a full-stack web 
            developer. My top priority is to get your business online the right way, 
            giving you industry-standard design and all the functionality you need to operate smoothly 
            online. Get in touch with the details of your project and let's get started.
          </p>
         {/* <a href={CV} download className='btn primary'>Download CV <HiDownload /> </a> */}
        </div>
      </div>
    </section>
  )
}

export default About