import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../LandingPage/Landing.css';
import IconBrujula from '../Assets/logo-w-name.png';
import Astronaut from '../Assets/astro.png';
import LogoBrujula from '../Assets/logos-brujula-icon.png';
import images from '../Assets/';
import Carousel from '../Components/MovilCarousel';
import WebCarousel from '../Components/WebCarousel';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';

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
  const infoline2 = [
    {
      tittle: 'Fotografía y Video',
      info: 'Una fotografía real de tu producto siempre será mejor que una descargada de internet. Realizamos sesión de foto y video a cada cliente para general contenido único.',
    },
    {
      tittle: 'Análisis de Datos',
      info: 'Cada comentario, cada vista, cada like, compartido, alcance, mensaje, todo se mide y analiza constantemente para llevar un control y análisis de la mejor manera de obtener resultados en tus redes.',
    },
    {
      tittle: 'Diseño WEB',
      info: 'Realizamos investigación de tu mercado, tu publico objetivo y tu competencia para poder segmentar y llegar más efectivamente a ellos.',
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
          <Zoom>
            <span className='subtitle-header'>
              Deja tu marketing digital en buenas manos
            </span>
          </Zoom>
          <Fade left>
            <span className='title-header'>¡Hagamos crecer</span>
          </Fade>
          <Fade right>
            <span className={'title-down-header'}>tu negocio!</span>
          </Fade>

          <Col style={{ position: 'relative' }}>
            <img alt='' className='astronaut' src={Astronaut}></img>
          </Col>
        </Col>

        <Row className='logo-brujula'>
          <img alt='' src={LogoBrujula} />
          <Zoom>
            <p>El mejor momento para iniciar es hoy</p>
          </Zoom>
        </Row>
      </Row>
      <Row className='info-section'>
        <h2 className='info-title'>El Marketing Digital consiste en</h2>
        <Row className={'info-container'}>
          {infoline1.map((info) => (
            <Col className='info-item'>
              <h2>{info.tittle}</h2>

              <Fade className='info-item' top>
                <p>{info.info}</p>
              </Fade>
            </Col>
          ))}
        </Row>
        <Row className='info-container'>
          {infoline2.map((info) => (
            <Col className='info-item'>
              <h2>{info.tittle}</h2>
              <Fade className='info-item' bottom>
                <p>{info.info}</p>
              </Fade>
            </Col>
          ))}
        </Row>
      </Row>
      <Row className='album-section'>
        <Row className='carousel-movil'>
          <Carousel className='carousel'></Carousel>
        </Row>
        <Row className='carousel-web'>
          <WebCarousel className='carousel'></WebCarousel>
        </Row>
      </Row>
      <Row className='contact-section'>
        <h2 className='contact-title'>Contáctanos Ahora</h2>
        <p className='contact-subtitle'>
          Cuéntanos sobre tus objetivos y necesidades de marketing digital
        </p>
        <Row className='icons-container'>
          <Flip cascade>
            <a
              href='https://www.facebook.com/brujulamktdigital/'
              target='_blank'
              rel='noreferrer'
            >
              <img alt='' src={images.fb} />
            </a>
            <a
              href='https://api.whatsapp.com/send?phone=n%C3%BAmero+526681703396'
              target='_blank'
              rel='noreferrer'
            >
              <img alt='' src={images.whats} />
            </a>
            <a
              href='https://www.instagram.com/brujulamktdigital/'
              target='_blank'
              rel='noreferrer'
            >
              <img alt='' src={images.insta} />
            </a>
            <a
              href='https://goo.gl/maps/SWTNHwgxLPjiEE3d7'
              target='_blank'
              rel='noreferrer'
            >
              <img alt='' src={images.google} />
            </a>
          </Flip>
        </Row>
        ´
      </Row>
    </Col>
  );
};

export default Landing;
