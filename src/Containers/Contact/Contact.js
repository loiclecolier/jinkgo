import React from 'react'
import './Contact.css'
import Desobry from './desobry-logo.jpg'
import Cosucra from './cosucra-logo.png'
import Bardahl from './bardhal-logo.png'
import Ipalle from './ipalle-logo.jpeg'

export default function Contact() {
  return (
    <div id="contact">
      <address className="coordonnees">
        <h3>Coordonnées</h3>
        <div className="identity">
          <svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.25 1.83325H2.75C1.2312 1.83325 0 3.06445 0 4.58325V5.49992H33V4.58325C33 3.06445 31.7682 1.83325 30.25 1.83325ZM0 24.7499C0 26.2681 1.2312 27.4999 2.75 27.4999H30.25C31.7688 27.4999 33 26.2687 33 24.7499V7.33325H0V24.7499ZM21.0833 10.9999H28.4167C28.9208 10.9999 29.3333 11.4124 29.3333 11.9166C29.3333 12.4208 28.9208 12.8333 28.4167 12.8333H21.0833C20.5792 12.8333 20.1667 12.4208 20.1667 11.9166C20.1667 11.4124 20.5792 10.9999 21.0833 10.9999ZM21.0833 14.6666H28.4167C28.9208 14.6666 29.3333 15.0791 29.3333 15.5833C29.3333 16.0874 28.9208 16.4999 28.4167 16.4999H21.0833C20.5792 16.4999 20.1667 16.0874 20.1667 15.5833C20.1667 15.0791 20.5792 14.6666 21.0833 14.6666ZM21.0833 18.3333H28.4167C28.9229 18.3333 29.3333 18.7437 29.3333 19.2499C29.3333 19.7561 28.9208 20.1666 28.4167 20.1666H21.0833C20.5771 20.1666 20.1667 19.7561 20.1667 19.2499C20.1667 18.7437 20.5792 18.3333 21.0833 18.3333ZM10.0833 10.9999C12.1086 10.9999 13.75 12.6419 13.75 14.6666C13.75 16.6913 12.1086 18.3333 10.0833 18.3333C8.05807 18.3333 6.41667 16.6913 6.41667 14.6666C6.41667 12.6419 8.06094 10.9999 10.0833 10.9999ZM6.41667 20.1666H13.75C15.2688 20.1666 16.5 21.3978 16.5 22.9166C16.5 23.4228 16.0896 23.8333 15.5833 23.8333H4.58333C4.07688 23.8333 3.66667 23.4208 3.66667 22.9166C3.66667 21.3984 4.89786 20.1666 6.41667 20.1666Z" fill="white"/>
          </svg>
          <p>Henneuse Judith<br/>Ingénieur Consultant EHS</p>
        </div>
        <div className="telephone">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 0C7.3873 0 0 7.3873 0 16.5C0 25.6127 7.3873 33 16.5 33C25.6127 33 33 25.6127 33 16.5C33 7.3873 25.6127 0 16.5 0ZM10.5703 6.55408C10.9103 6.53403 11.2176 6.73723 11.4505 7.09789L13.7064 11.376C13.9439 11.8829 13.8089 12.4257 13.4546 12.7879L12.4213 13.8211C12.3576 13.9085 12.3156 14.007 12.3146 14.1152C12.7108 15.649 13.9128 17.0638 14.9733 18.0368C16.0338 19.0097 17.1736 20.327 18.6531 20.6391C18.836 20.6901 19.0601 20.7084 19.1909 20.5867L20.3914 19.3642C20.8057 19.0501 21.4052 18.8979 21.8476 19.1547H21.8677L25.9383 21.5576C26.5358 21.9321 26.5977 22.656 26.1699 23.0964L23.3663 25.8779C22.9522 26.3025 22.4022 26.4453 21.8678 26.4459C19.5042 26.3751 17.2709 25.2151 15.4366 24.0229C12.4256 21.8324 9.66369 19.1156 7.92976 15.8333C7.26476 14.4569 6.48357 12.7008 6.55812 11.1645C6.56477 10.5866 6.72114 10.0204 7.12814 9.64788L9.93184 6.84417C10.1502 6.65833 10.3663 6.56612 10.5703 6.55408Z" fill="white"/>
          </svg>
          <a href="tel:+32471442030">+32 471 44 20 30</a>
        </div>
        <div className="location">
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5 2.1875C14.3103 2.19126 11.2523 3.46005 8.99679 5.71553C6.74131 7.97101 5.47253 11.029 5.46876 14.2188C5.46494 16.8254 6.3164 19.3613 7.89251 21.4375C7.89251 21.4375 8.22064 21.8695 8.27423 21.9319L17.5 32.8125L26.7302 21.9264C26.7783 21.8684 27.1075 21.4375 27.1075 21.4375L27.1086 21.4342C28.6839 19.359 29.535 16.8242 29.5313 14.2188C29.5275 11.029 28.2587 7.97101 26.0032 5.71553C23.7478 3.46005 20.6897 2.19126 17.5 2.1875ZM17.5 18.5938C16.6347 18.5938 15.7889 18.3372 15.0694 17.8564C14.3499 17.3757 13.7892 16.6924 13.458 15.893C13.1269 15.0936 13.0403 14.2139 13.2091 13.3652C13.3779 12.5166 13.7946 11.737 14.4064 11.1252C15.0183 10.5133 15.7978 10.0966 16.6465 9.92781C17.4952 9.759 18.3748 9.84564 19.1743 10.1768C19.9737 10.5079 20.657 11.0687 21.1377 11.7881C21.6184 12.5076 21.875 13.3535 21.875 14.2188C21.8736 15.3786 21.4122 16.4906 20.592 17.3107C19.7718 18.1309 18.6599 18.5923 17.5 18.5938Z" fill="white"/>
          </svg>
          <p>
            59B Rue des Saules<br/>
            7730 Néchin<br/>
            Belgique
          </p>
        </div>
      </address>
      <div className="contact-section">
        <form className="form-contact">
          <div className="informations-contact">
            <div>
              <label htmlFor="name">Nom et prénom</label>
              <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  id="name"
                  className="inp-name"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  id="email"
                  className="inp-email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
                name="message"
                required
                id="message"
                className="inp-message"
            ></textarea>
          </div>
          <input className="send-button" type="submit" value="Envoyer" />
        </form>
        <h4>Ils me font confiance</h4>
        <div className="customers-image">
          <a href="https://www.desobry.be/" target="_blank" rel="noreferrer"><img src={Desobry} alt="Desobry Logo" /></a>
          <a href="https://www.cosucra.com/" target="_blank" rel="noreferrer"><img src={Cosucra} alt="Cosucra Logo" /></a>
          <a href="https://bardahl.fr/fr-fr/accueil" target="_blank" rel="noreferrer"><img src={Bardahl} alt="Bardahl Logo" /></a>
          <a href="https://www.ipalle.be/" target="_blank" rel="noreferrer"><img src={Ipalle} alt="Ipalle Logo" /></a>
        </div>
      </div>
    </div>
  )
}
