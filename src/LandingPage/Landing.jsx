import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../LandingPage/Landing.css';
import IconBrujula from '../Assets/logo-w-name.png';
import Astronaut from '../Assets/astro.png';
import LogoBrujula from '../Assets/logos-brujula-icon.png';
const Landing = () => {
  const infoline1 = [
    {
      tittle: 'Análisis de Mercado',
      info: 'Realizamos investigación de tu mercado, tu publico objetivo y tu competencia para poder segmentar y llegar más efectivamente a ellos.',
    },
    {
      tittle: 'Diseño de Identidad',
      info: 'Tu negocio necesita una identidad propia, la cual será aplicada a todas sus redes, imágenes y aplicaciones, no solo es la foto si no la manera de comunicar un mensaje.',
    },
    {
      tittle: 'Análisis de Mercado',
      info: 'Manejamos Facebook, Instram, Google, Twitter, Linkeding, Youtube, Tiktok, Email y todo tipo de aplicaciones especializadas.',
    },
  ];
  return (
    <Col className='container m-0'>
      <Row className='navbar'>
        <img
          alt=''
          src={IconBrujula}
          style={{ width: 165, height: 50, paddingTop: 5, paddingBottom: 5 }}
        />
      </Row>
      <Row className='header'>
        <Col className='header-container'>
          <span className='subtitle-header'>
            Deja tu marketing digital en buenas manos
          </span>
          <span className='title-header'>¡Hagamos crecer</span>
          <span className={'title-down-header'}>tu negocio!</span>
          <Col style={{ position: 'relative' }}>
            <img alt='' className='astronaut' src={Astronaut}></img>
          </Col>
        </Col>

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
      </Row>
      <Row className='info-section'>
        <h2 className='info-title'>El Marketing Digital consiste en</h2>
        <Row className={'info-container'}>
          {infoline1.map((info) => (
            <Col className='info-item'>
              <h2>{info.tittle}</h2>
              <p>{info.info}</p>
            </Col>
          ))}
        </Row>
        <Row className={'info-container'}>
          {infoline1.map((info) => (
            <Col className='info-item'>
              <h2>{info.tittle}</h2>
              <p>{info.info}</p>
            </Col>
          ))}
        </Row>
      </Row>
    </Col>
  );
};

export default Landing;
