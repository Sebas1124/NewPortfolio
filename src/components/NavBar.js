import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

    const [ activeLink, setActiveLink ] = useState('home');
    const [ scrolled, setScrolled ] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if ( window.scrollY > 50 ) {
                setScrolled(true);
            }else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = ( Link ) => {
        setActiveLink( Link )
    }
    

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={ activeLink === 'Inicio' ? 'active navbar-link' : 'navbar-link' } onClick={ () => onUpdateActiveLink('Inicio') }>Inicio</Nav.Link>
              <Nav.Link href="#skills" className={ activeLink === 'Habilidades' ? 'active navbar-link' : 'navbar-link' } onClick={ () => onUpdateActiveLink('Habilidades') }>Habilidades</Nav.Link>
              <Nav.Link href="#projects" className={ activeLink === 'Proyectos' ? 'active navbar-link' : 'navbar-link' } onClick={ () => onUpdateActiveLink('Proyectos') }>Proyectos</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={ navIcon1 } alt="Social Icon" /></a>
                <a href="#"><img src={ navIcon2 } alt="Social Icon" /></a>
                <a href="#"><img src={ navIcon3 } alt="Social Icon" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Contactame</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}

