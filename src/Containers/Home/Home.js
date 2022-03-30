import React from 'react'
import './Home.css'
import VideoBanner from './video-jinkgo.mp4'
import PosterBanner from './poster-video-jinkgo.png'

export default function Home(props) {

    const scrollToSection = () => {
      props.forwardRef.current.scroll({
        top: 473,
        behavior: 'smooth'
      })
    }

  return (
    <div id="home">
      <div className="site-title">
        <h1>Jinkgo</h1>
        <h2>Consultante EHS</h2>
      </div>
      <div className="site-mantra">
        <div>Sécurité</div>
        <div>Prévention</div>
        <div>Environnement</div>
      </div>
      <div className="scroll-down">
        <svg onClick={scrollToSection} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.0002 0C17.4702 0 11.3652 6.105 11.3652 13.64V36.36C11.3652 43.89 17.4702 50 25.0002 50C32.5302 50 38.6352 43.895 38.6352 36.36V13.635C38.6402 6.11 32.5302 0 25.0002 0ZM36.8152 36.36C36.8152 42.875 31.5202 48.175 25.0002 48.175C18.4802 48.175 13.1902 42.875 13.1902 36.36V13.635C13.1902 7.12 18.4852 1.82 25.0052 1.82C31.5252 1.82 36.8202 7.125 36.8202 13.635L36.8152 36.36ZM31.8702 38.325L25.3852 44.805C25.1702 45.02 24.8302 45.02 24.6152 44.805L18.1352 38.325C17.9202 38.11 17.9202 37.77 18.1352 37.555L19.4252 36.265C19.6402 36.05 19.9802 36.05 20.1952 36.265L24.6252 40.695C24.8402 40.91 25.1802 40.91 25.3952 40.695L29.8252 36.265C30.0402 36.05 30.3802 36.05 30.5952 36.265L31.8852 37.555C32.0852 37.77 32.0852 38.115 31.8702 38.325Z" fill="white"/>
        </svg>
      </div>
      <video autoPlay preload="none" loop muted poster={PosterBanner}>
        <source src={VideoBanner} type="video/mp4" />
      </video>
    </div>
  )
}
