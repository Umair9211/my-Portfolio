import React from 'react'
import { Card, CardGroup, Row, Col, Container } from "react-bootstrap";

const CardList = ({title,data}) => {
  return (
    <>
      <Container>
<h2 className="pb-4 text-center">{title}</h2>
              <Row xs={1} md={2} lg={3} className="g-4 text-center">
                {data.map((project) => (
       <Col className="g-md-3" key={project.id}>
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="project-card-link"
  >
    <Card
      className="project-card text-light h-100"
    >
      <Card.Img className='pb-1' variant="top" src={`/img/${project.image}.png`} />
      <Card.Body >
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
      </Card.Body>
    </Card>
  </a>
</Col>

      
      ))}
      
        
        
        </Row>
        </Container>
    
    </>
  )
}

export default CardList;