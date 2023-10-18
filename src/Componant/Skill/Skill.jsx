import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FaAngleDoubleRight } from "react-icons/fa";
import '../Skill/Skill.css';

const Skill = () => { 
    return (
        <> 
            <section className="skills mt-4 mb-3" id="skills">
                <Container>
                <h1 className="heading" data-aos="flip-left" data-aos-duration="3000"> <span> my </span> skills </h1>
                    <Row className='align-items-center'>
                        <Col xxl={6} xl={6} lg={12} md={12} sm={12} data-aos="flip-right" data-aos-duration="3000">
                          <p>Web Design</p>
                          <ProgressBar variant="success" now={95} />
                          <br/> 
                            <p>css/scss</p>
                            <ProgressBar variant="danger" now={90} />
                            <br/> 
                            <p>Tailwind css</p>
                            <ProgressBar className='Tailwind' now={80} />
                            <br/> 
                            <p>Javascript Development</p>
                            <ProgressBar variant="secondary" now={70} />
                            <br/> 
                          <p>react js Development</p>
                            <ProgressBar variant="info" now={60} />
                            <br/>
                            <p>Php Development</p>
                            <ProgressBar variant="warning" now={45} />
                            <br/>
                            <p>Laravel Development</p>
                            <ProgressBar variant="danger" now={50} />
                           
                        </Col>
                        
                        <Col xxl={6} xl={6} lg={12} md={12} sm={12}>
                     
                        <div className="skill_box"> 
                      
                                <div className="skills_at" data-aos="zoom-in" data-aos-duration="3000">
                                    <h3 className='skill_text'><FaAngleDoubleRight /> 3+ </h3>
                                    <p className='skill_text'>years of experience</p>
                                </div>
                                <div className="skills_at" data-aos="zoom-in-up" data-aos-duration="3000">
                                    <h3 className='skill_text'> <FaAngleDoubleRight /> 10+ </h3>
                                    <p className='skill_text'>happy clients</p>
                                </div>
                                
                                <div className="skills_at" data-aos="zoom-in-right" data-aos-duration="3000">
                                    <h3 className='skill_text'> <FaAngleDoubleRight /> 20+ </h3>
                                    <p className='skill_text'>projects completed</p>
                                </div>
                                <div className="skills_at" data-aos-duration="3000" data-aos="zoom-in-left">
                                    <h3 className='skill_text'> <FaAngleDoubleRight /> 1+ </h3>
                                    <p className='skill_text'>awards won</p>
                                </div>
                        
                            </div>
                           
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Skill;