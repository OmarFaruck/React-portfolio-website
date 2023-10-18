import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../images/myimg2'
import Button from 'react-bootstrap/Button';
import { HashLink as Link } from 'react-router-hash-link';
import { Typewriter } from 'react-simple-typewriter'
import '../Mypage/Mypage.css'
import '../Mypage/responsive.css'
 
const Mypage = () => {

    return (

        <section className="home" id="home">
            <Container className='mt-4 mb-4'>
                <Row className='align-items-center'>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                        <div className="content" data-aos="flip-left" data-aos-duration="3000">
                            <span className="hi"> hi there... </span>
                            <h3>My name is MD. <span> Omar Faruck </span> </h3>

                            <h3 className="post">i am a   <span style={{ fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['web designer', 'React js develope', 'PHP develope', 'Laravel develope']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={400}
                                    deleteSpeed={300}
                                    delaySpeed={250}
                                />
                            </span></h3>

                            <p className="text"> I Am A Front  End Developer.I Will Give Your Project A Lot Of Importance And I Will Be Able To Complete It At The Specified Time, God Willing.</p>
                            <Link to="#About"><Button className="btn1">about me</Button></Link>
                        </div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                        <div data-aos="fade-left" data-aos-duration="3000">
                        <img src={img1} alt="" className='img-fluid mx-auto d-block img1'/>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Mypage;
 