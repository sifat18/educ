import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import useData from '../dataloadHooks/dataload';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ar from '../images/icons8-arrow-.png'
import st from '../images/steps.png'

export default function CourseCatalog() {
  const [item] = useData();
  const { tag } = useParams()
  const [course, setCourse] = useState(item)
  useEffect(() => {
    let query = tag === "IT" ? "technical" : "IT"
    let data = item.find(d => d.tag !== query)
    setCourse(data)
  }, [tag])
  console.log(item);



  return (
    <><Header />
      {course ? <Container><Row xs={1} md={3} className="g-4 bigMargin">
        {course.map((id) => (
          <Col key={id._id}>
            <Card className='py-1'>
              <Card.Img variant="top" className='img-fluid ' src={id.imageLink} />
              <Card.Body className='text-start'>
                <p>Unive</p>
                <Card.Title >{id.coursename}</Card.Title>
                <Card.Text>{id.about.slice(0, 100)}              </Card.Text>
              </Card.Body>
              <Row>
                <Col xs={6}>
                  <p><img src={st} alt="" height={25} /></p>
                  <p className='fs-7'>Beginner</p>
                </Col>
                <Col xs={6}>
                  <NavLink to={`/learn/${id._id}`}> <Button className='p-3' variant="outline-dark">preview <img src={ar} alt="" /></Button></NavLink>

                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row> </Container> : <Spinner animation="border" variant="danger" />
      }
      <Footer /></>
  )
}
