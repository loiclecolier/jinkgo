import React, { useEffect, useState, useRef } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo512.png'
import LogoWhite from '../../assets/logo_white.png'

export default function Navbar(props) {

  const [toggleMenu, setToggleMenu] = useState(false);

  const refHeader = useRef();

  useEffect(() => {

    const containers = props.forwardRef.current;

    containers.addEventListener('scroll', changeNavbar);

    function changeNavbar () {
        console.log(containers.scrollTop);
        if (containers.scrollTop >= 525) {
            refHeader.current.classList.add('header-dark');
        }
        else {
            refHeader.current.classList.remove('header-dark');
        }
    }

    return () => {
        window.removeEventListener('scroll', changeNavbar);
    }

  }, [])

  const toggleNav = () => {
      setToggleMenu(!toggleMenu);
  }

  return (
    <nav ref={refHeader} className="header">
        <a href="/" className="logo">
          <img src={Logo} alt="Jinkgo Logo" />
        </a>
        <div className={toggleMenu ? "menu show-nav" : "menu"}>
            <a href="/" className="logo">
            <img src={LogoWhite} alt="Jinkgo Logo" />
            </a>
            <ul className="navbar-menu">
                <li className="navbar-menu-item">
                    <a href="#valeurs" onClick={toggleNav}>
                        Visions et valeurs
                    </a>
                </li>
                <li className="navbar-menu-item">
                    <a href="#competences" onClick={toggleNav}>
                        Compétences
                    </a>
                </li>
                <li className="navbar-menu-item">
                    <a href="#reportage-notele" onClick={toggleNav}>
                        Reportage Notélé
                    </a>
                </li>
                <li className="navbar-menu-item">
                    <a href="#contact" onClick={toggleNav}>
                        Contact
                    </a>
                </li>
            </ul>
            <div className="footer-menu">
                <ul className="footer-nav-menu">
                    <li>
                        Politique de confidentialité
                    </li>
                    <li>
                        Mentions légales
                    </li>
                </ul>
                <span className="copyright">
                    © 2022 Jinkgo
                </span>
            </div>
        </div>
        <button onClick={toggleNav} className="btn-burger">
            <span className="burger-name">Menu</span>
            <span className="burger-bar"></span>
        </button>
    </nav>
  )
}
