import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img2 from '../images/myimg1'
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import '../About/About.css'
const About = () => {
    return (
        <>
           <section className="about" id="About">
                <Container className='mt-4'> 
                    <h1 className="heading" data-aos="fade-right" data-aos-duration="3000"> about <span> me </span> </h1>  
                    <Row className='align-items-center'>
                    <Col xxl={5} xl={5} lg={5} md={12} sm={12}  data-aos="fade-down-right" data-aos-duration="3000">
                        <img src={img2} alt="" className='mx-auto d-block img2'/>
                    </Col>
                    <Col xxl={7} xl={7} lg={7} md={12} sm={12}>
                    <div className="contents" data-aos="fade-up-left" data-aos-duration="3000">
                        <h3> my name is Md.Omar Faruck & <br/> i am a Front  End Developer </h3>
                        <p>I Am A Front  End Developer.I Will Give Your Project A Lot Of Importance And I Will Be Able To Complete It At The Specified Time, God Willing.</p>
                        <div className="box-container">
                            <div className="box">
                                <p> <span> age : </span> 29 </p>
                                <p> <span> gender : </span> male </p>
                                <p> <span> language : </span>bangla, hindi, english </p>
                                <p> <span> work : </span> Front  End Developer </p>
                            </div>
                            <div className="box box2">
                                <p> <span> freelance : </span> available </p>
                                <Link className='nav-link' to="tel:+8801858927228"><p> <span> phone : </span> +8801858927228 </p></Link>
                                <Link className='nav-link' onClick={() => window.location = 'mailto:omarfaruck1944@gmail.com'}><p className='email'> <span> email : </span> omarfaruck1994@gmail.com</p></Link>
                                <p> <span> country : </span> Bangladesh </p>
                            </div>
                        </div>
                        <NavLink to="#"><button  className="btn1">download CV</button></NavLink>
                        <Link onClick={() => window.location = 'mailto:omarfaruck1944@gmail.com'}><button  className="btn1">hire me</button></Link>
                    </div>
                    </Col>
                    </Row>
                </Container> 
           </section>
        </>
    );
};

export default About;