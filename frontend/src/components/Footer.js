import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-8'>Copyright &copy; Arashans</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
