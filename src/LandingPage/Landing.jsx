import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../LandingPage/Landing.css';
import IconBrujula from '../Assets/logo-w-name.png';
import Astronaut from '../Assets/astro.png';
import LogoBrujula from '../Assets/logos-brujula-icon.png';
const Landing = () => {
  return (
    <Col className='container m-0'>
      <Row className='navbar'>
        <img
          alt=''
          src={IconBrujula}
          style={{ width: 250, height: 72, paddingTop: 10, paddingBottom: 10 }}
        />
      </Row>
      <Row className='header'>
        <span className='subtitle-header'>
          Deja tu marketing digital en buenas manos
        </span>
        <span className='title-header'>¡Hagamos crecer</span>
        <span className={'title-down-header'}>tu negocio!</span>

        <Row className='logo-brujula'>
          <img
            alt=''
            src={LogoBrujula}
            style={{
              width: 182,
              height: 182,
            }}
          />
          <p>El mejor momento para iniciar es hoy</p>
        </Row>

        <img alt='' src={Astronaut} className='astronaut'></img>
      </Row>
    </Col>
  );
};

export default Landing;
