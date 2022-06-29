import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './Home.css'
import Appbar from '../Appbar/Appbar'
import Cursos from '../Cursos/Cursos'
const Home = () => {
  return (
<>
<Appbar />
<Container fluid className='home-back'>
  <Row>
    <Col>
        <h1>V&B Eventos</h1>
    </Col>
  </Row>
</Container>
<Cursos />
</>


    
  )
}

export default Home