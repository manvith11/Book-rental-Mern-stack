import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <p className="description" >Welcome to <span className='Project'>BookMania</span>, your premier book rental platform. We offer a wide selection of books for all kinds of readers. Stay connected with us through our social media channels for the latest updates and exclusive offers. Enjoy the best reading experience with BookMania!</p>

      <ul className="social-icon">
        <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
      </ul>
      <ul className="menu">
        <li className="menu__item"><a className="menu__link" href="/home">Home</a></li>
        <li className="menu__item"><a className="menu__link" href="/about">About</a></li>
        <li className="menu__item"><a className="menu__link" href="/team">Team</a></li>
        <li className="menu__item"><a className="menu__link" href="/contact">Contact Us</a></li>
      </ul>
      <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
