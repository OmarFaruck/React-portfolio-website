import React from 'react';
import Container from 'react-bootstrap/Container';
import img from '../images/figma/section-image-1.png'
import img1 from '../images/img-1.webp'
import img2 from '../images/img-2.png'
import img3 from '../images/img-3.jpg'
import img4 from '../images/newimg-4.png'
import img5 from '../images/projectimg.png'
import img6 from '../images/projectimg1'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Portfolio/Portfolio.css'
import { NavLink } from 'react-router-dom'; 
const Portfolio = () => {
    return (
        <>
            <section className="portfolio" id="Portfolio">
                <Container>
                    <h1 className="heading"> <span> my </span> portfolio </h1>

                    <div className="box-container">
                     
                        <Row>
                            <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                                <Card style={{ width: '100%' }} data-aos-duration="3000" data-aos="fade-up-right">
                                    <NavLink to='https://reacthospitalmanagement.netlify.app/' target='_blank'><Card.Img variant="top" src={img1} style={{ height: '14.5rem' }} /></NavLink>
                                    <div className="text-center">
                                    <Card.Body>
                                        <Card.Title>React Hospital Project</Card.Title>
                                        <Card.Text>
                                        Your Health is our top priority. Browse through our most desired tests that ensure your good health.
                                        </Card.Text>
                                        <NavLink to='https://reacthospitalmanagement.netlify.app/' target='_blank'><Button variant="primary_1">Go to website</Button></NavLink>
                                         
                                    </Card.Body>
                                    </div>
                                    
                                </Card>

                                <Card style={{ width: '100%', marginTop: '50px' }} data-aos-duration="3000" data-aos="fade-right">
                                    <NavLink to='https://reactrealstateproject.netlify.app/' target='_blank'><Card.Img variant="top" src={img2} style={{ height: '14.6rem' }} /></NavLink>
                                    <div className="text-center">
                                    <Card.Body>
                                        <Card.Title>React Realstate Project</Card.Title>
                                        <Card.Text>
                                        Find a variety of properties that suit you very easilty
                                        Forget all difficulties in finding a residence for you.
                                        </Card.Text>
                                        <NavLink to='https://reactrealstateproject.netlify.app/' target='_blank'><Button variant="primary_1">Go to website</Button></NavLink>  
                                    </Card.Body>
                                    </div>
                                </Card>
                            </Col>

                            <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                                <Card style={{ width: '100%' }} data-aos="fade-up-left" data-aos-duration="3000">
                                    <NavLink to='https://reacthealthproject.netlify.app/' target='_blank'><Card.Img variant="top" src={img3} style={{ height: '14.6rem' }} /></NavLink>
                                    <div className="text-center">
                                    <Card.Body>
                                        <Card.Title>react Health Project</Card.Title>
                                        <Card.Text> Doctors routinely scan dozens or hundreds of abstracts each day as they do their pointing.
                                        </Card.Text>
                                        <NavLink to='https://reacthealthproject.netlify.app/' target='_blank'><Button variant="primary_1">Go to website</Button></NavLink>
                                        {/* <Iconpage/> */}
                                    </Card.Body>
                                    </div>
                                </Card>

                                <Card style={{ width: '100%', marginTop: '50px' }} data-aos="fade-up-left" data-aos-duration="3000">
                                    <NavLink to='https://reactecommerceprojects.netlify.app/' target='_blank'><Card.Img variant="top" src={img4} style={{ height: '14.6rem' }} /></NavLink>
                                    <div className="text-center">
                                    <Card.Body>
                                        <Card.Title>React Ecommerce project</Card.Title>
                                        <Card.Text>
                                        Sell online through your eCommerce website, social media and sales channels, or in-person with POS. 
                                        </Card.Text>
                                        <NavLink to='https://reactecommerceprojects.netlify.app/' target='_blank'><Button variant="primary_1">Go to website</Button></NavLink>
                                        {/* <Iconpage/> */}
                                    </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
  
                        <Row className="next">
                            <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                                <Card style={{ width: '100%' }} data-aos="fade-down-right" data-aos-duration="3000">
                                    <NavLink to='https://reacteducationmanagement.netlify.app/' target='_blank'><Card.Img variant="top" src={img5} style={{ height: '14.6rem' }} /></NavLink>
                                    <div className="text-center">
                                    <Card.Body>
                                        <Card.Title>react Education Management</Card.Title>
                                        <Card.Text>
                                        This course will support leaders at the every stage of their management journey. 
                                        </Card.Text>
                                        <NavLink to='https://reacteducationmanagement.netlify.app/' target='_blank'><Button variant="primary_1">Go to website</Button></NavLink>
                                        {/* <Iconpage/> */}
                                    </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                            
                            <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                            <Card style={{ width: '100%'}} data-aos="fade-down-left" data-aos-duration="3000">
                                    <NavLink to='https://reactrealstateproject.netlify.app/' target='_blank'><Card.Img variant="top" src={img2} style={{ height: '14.6rem' }} /></NavLink>
                                    <div className="text-center">
                                    <Card.Body>
                                        <Card.Title>React Realstate Project</Card.Title>
                                        <Card.Text>
                                        Find a variety of properties that suit you very easilty
                                        Forget all difficulties in finding a residence for you.
                                        </Card.Text>
                                        <NavLink to='https://reactrealstateproject.netlify.app/' target='_blank'><Button variant="primary_1">Go to website</Button></NavLink>
                                        {/* <Iconpage/> */}
                                    </Card.Body>
                                    </div>   
                                </Card>
                            </Col>

                        </Row>

                       
                        <Row>
                             <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                             <Card style={{ width: '100%' }} data-aos-duration="3000" data-aos="flip-left">
                                    <NavLink to='https://tailwindschoolmanagementproject.netlify.app/' target='_blank'><Card.Img variant="top" src={img6} style={{ height: '14.6rem' }} /></NavLink>
                                    <div className="text-center">
                                    <Card.Body>
                                        <Card.Title>tailwind school management</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <NavLink to='https://tailwindschoolmanagementproject.netlify.app/' target='_blank'><Button variant="primary_1">Go to website</Button></NavLink>
                                        {/* <Iconpage/> */}
                                    </Card.Body>
                                    </div> 
                                </Card>
                             </Col>
                             <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                             <Card style={{ width: '100%' }} data-aos-duration="3000" data-aos="flip-right">
                                    <NavLink to='https://omarfaruck.github.io/Final_asserment_project/' target='_blank'><Card.Img variant="top" src={img} style={{ height: '14.5rem' }} /></NavLink>
                                    <div className="text-center">
                                    <Card.Body>
                                        <Card.Title>Html School project</Card.Title>
                                        <Card.Text>
                                        Your Health is our top priority. Browse through our most desired tests that ensure your good health.
                                        </Card.Text>
                                        <NavLink to='https://omarfaruck.github.io/Final_asserment_project/' target='_blank'><Button variant="primary_1">Go to website</Button></NavLink>
                                        {/* <Iconpage/> */}
                                    </Card.Body>
                                    </div>
                                  
                                </Card>
                             </Col>
                        </Row>

                    </div>
                </Container>
            </section>
        </>
    );
};

export default Portfolio;