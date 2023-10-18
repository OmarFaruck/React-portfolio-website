import React from 'react';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom'; 
import { FaCode,FaPaintBrush,FaReact,FaLaravel,FaReacteurope,FaDesktop } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Service/Service.css'
const Service = () => {
    return (
        <>
            <section className="service" id="service">
                <Container className='mt-4 mb-4'>
                    <h1 className="heading service"> <span> my </span> services </h1>

                    <div className="box-container">
                        <Row>
                                <Col xxl={4} xl={4} lg={4} md={6} sm={12}>
                                    <div className="service_box" data-aos="zoom-in-left" data-aos-duration="3000">
                                        <NavLink to="https://omarfaruck.github.io/Final_asserment_project/"    target="_blank"  className='nav-link'> 
                                            <p><FaCode /></p>
                                            <h3>web design</h3>
                                        </NavLink>
                                            <p>The concept of web design and development has been around for about as long as websites have existed. It used to have a much simpler definition because website creation used to be a much simpler process.</p>
                                       
                                    </div>

                                    <div className="service_box" data-aos="zoom-out-up" data-aos-duration="3000">
                                        <NavLink to="#" target="_blank"  className='nav-link'><p><FaPaintBrush /></p>
                                        <h3>PHP development</h3>
                                        </NavLink>
                                        <p>The concept of web design and development has been around for about as long as websites have existed. It used to have a much simpler definition because website creation used to be a much simpler process.</p> 
                                    </div>
                                </Col>
                                    <Col xxl={4} xl={4} lg={4} md={6} sm={12}>
                                        <div className="service_box" data-aos="fade-up" data-aos-duration="3000">
                                            <NavLink to="https://reacthealthproject.netlify.app/" target="_blank"  className='nav-link'>
                                            <p><FaReact /></p>
                                            <h3>react design</h3>
                                            </NavLink>
                                            <p>The concept of web design and development has been around for about as long as websites have existed. It used to have a much simpler definition because website creation used to be a much simpler process.</p>
                                        </div>
                                        <div className="service_box" data-aos="fade-right" data-aos-duration="300">
                                                <NavLink to="#" target="_blank"  className='nav-link'>
                                                    <p><FaReacteurope/></p>
                                                <h4>Javascript development</h4>
                                                </NavLink>
                                                <p>The concept of web design and development has been around for about as long as websites have existed. It used to have a much simpler definition because website creation used to be a much simpler process.</p>
                                        </div>
                                    </Col>
                     
                            <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
                                  

                                    <div className="service_box"data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000">
                                        <NavLink to="https://tailwindschoolmanagementproject.netlify.app/" target="_blank"  className='nav-link'>
                                            <p><FaDesktop/></p>
                                        <h3>tailwind css</h3>
                                        </NavLink>
                                        <p>The concept of web design and development has been around for about as long as websites have existed. It used to have a much simpler definition because website creation used to be a much simpler process.</p>
                                    </div>
                                

                                <div className="service_box" data-aos="zoom-in" data-aos-duration="3000">
                                    <NavLink to="#" target="_blank"  className='nav-link'>
                                    <p><FaLaravel /></p>
                                    <h4>LARAVEL development</h4> 
                                    </NavLink>
                                    <p>The concept of web design and development has been around for about as long as websites have existed. It used to have a much simpler definition because website creation used to be a much simpler process.</p>
                                </div>
                            </Col>
                        </Row> 
                           
                    </div>
                </Container> 
            </section>
        </>
    );
};

export default Service;