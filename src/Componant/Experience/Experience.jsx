import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Experience/Experience.css'
const Experience = () => {
    return (
        <>
            <section className="experience" id="experience">
                <Container className='mt-4 mb-4'>
                    <h1 className="heading"> <span> my </span> experience </h1>

                    <div className="box-experience">
                        <Row>
                            <Col xxl={6} xl={6} lg={6} md={6} sm={12}>

                                <div className="boxs" data-aos="zoom-in" data-aos-duration="3000">
                                    <div className="content">
                                        <span> 2018 - 2019 </span>
                                        <h3>web desing</h3>
                                        <p>Web design is an umbrella term that describes the process of creating a website. Like the name suggests, it involves two  name suggestsmajor skill sets: web design and web development.</p>
                                    </div>
                                </div>

                                <div className="boxs" data-aos="zoom-in-up" data-aos-duration="3000">
                                    <div className="content">
                                        <span> 2020 - 2021 </span>
                                        <h3>Php development</h3>
                                        <p>Web design and development is an umbrella term that describes the process of creating a website. Like the name suggests, it web design and web involves two major skill sets: web design and web development.</p>
                                    </div>
                                </div>
                                <div className="boxs" data-aos-duration="3000" data-aos="zoom-in-down">
                                    <div className="content">
                                        <span> 2017 - 2018 </span>
                                        <h5>larvel development</h5>
                                        <p>Web design and development is an umbrella term that describes the process of creating a website. Like the name suggests, it involves two major skill sets: web design and web development.</p>
                                    </div>
                                </div>
                                <div className="boxs" data-aos-duration="3000" data-aos="zoom-in-left">
                                    <div className="content">
                                        <span> 2017 - 2018 </span>
                                        <h5>css/scss</h5>
                                        <p>Web design and development is an umbrella term that describes the process of creating a website. Like the name suggests, it involves two major skill sets: web design and web development.</p>
                                    </div>
                                </div>
                               
                            </Col>

                            <Col xxl={6} xl={6} lg={6} md={6} sm={12}>


                                <div className="boxs" data-aos="zoom-in-right" data-aos-duration="3000">
                                    <div className="content">
                                        <span> 2019 - 2020 </span>
                                        <h3>react development</h3>
                                        <p>Web design and development is an umbrella term that describes the process of creating a website. Like the name suggests, it involves two major skill sets: web design and web development.</p>
                                    </div>
                                </div>

                                <div className="boxs" data-aos-duration="3000" data-aos="zoom-out-right">
                                    <div className="content">
                                        <span> 2020 - 2021 </span>
                                        <h3>responsive design</h3>
                                        <p>Ensure that your emails always look great with our predefined email templates, or effortlessly create your own templates to suit your needs.Zoho Campaigns also allows you to promote your campaigns.</p>
                                    </div>
                                </div>
                                <div className="boxs" data-aos-duration="3000" data-aos="zoom-out-left">
                                    <div className="content">
                                        <span> 2018 - 2019 </span>
                                        <h3>javascript development</h3>
                                        <p>Web design and development is an umbrella term that describes the process of creating a website. Like the name suggests, it involves two major skill sets: web design and web development.</p>
                                    </div>
                                </div>
                                <div className="boxs" data-aos-duration="3000" data-aos="fade-left">
                                    <div className="content">
                                        <span> 2017 - 2018 </span>
                                        <h5>Tailwind css</h5>
                                        <p>Web design and development is an umbrella term that describes the process of creating a website. Like the name suggests, it involves two major skill sets: web design and web development.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Container>
            </section>
        </>
    );
};

export default Experience;