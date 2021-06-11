import React from 'react'
import { Container, Row } from 'react-bootstrap';
import '../LandingPage/Landing.css'
const Landing = () => {
    return(
        <Container className='container m-0'>
    
            <Row className='navbar mb-0'/>
            <div className='row header'>
            <div className='row m-0'>
                <span className='subtitle-header'>
                Deja tu marketing digital en buenas manos
                </span>
                <h1 className='title-header'>
                ¡Hagamos crecer tu negocio!
                </h1>
                <p>
                El mejor momento para iniciar es hoy
                </p>
            </div>
        </div>
        </Container>

    )

}

export default Landing;