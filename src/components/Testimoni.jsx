import React from "react";
import { Container, Card, Row } from "react-bootstrap";
import orang1 from "../../src/image/orang1.svg";
import orang2 from "../../src/image/orang2.svg";
import orang3 from "../../src/image/orang3.svg";
import orang4 from "../../src/image/orang4.svg";
import play from "../../src/image/play.svg";
import app from "../../src/image/app.svg";
import kurir from "../../src/image/kurir-ikan.svg";
import { RiStarSFill } from "react-icons/ri";
import "./Testimoni.css";

const Testimoni = () => {
    const testi = [
        {
            name: "Floyd Miles",
            pesan: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
            name: "Ronald Richards",
            pesan: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
            name: "Floyd Miles",
            pesan: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
            name: "Floyd Miles",
            pesan: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
    ];
    return (
        <>
            <Container style={{ marginTop: "190px", marginBottom: "150px" }}>
                <div className="text-center mb-5 pb-5">
                    <h1 className="mb-5">Testimonial</h1>
                    <p className="text-secondary">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe beatae, voluptates, dolorem itaque repellat harum a quae inventore similique quo eligendi
                        vitae ad, dolor eaque perspiciatis sunt et veniam suscipit cumque obcaecati illo quam totam ipsa culpa. Vel, hic illum. Ipsum tenetur dolorem asperiores
                        necessitatibus mollitia. Ea, nam voluptate natus necessitatibus fugiat maiores. Unde cupiditate ullam animi quos? Labore ipsam delectus, iste debitis quidem
                        itaque dignissimos optio omnis fugiat, ratione vel est consequatur distinctio quaerat voluptatem. Consequuntur nam doloremque placeat ipsum ratione, qui eum
                        quasi eveniet! Inventore, dignissimos veniam ea provident numquam voluptatibus voluptate, accusamus sunt repudiandae odit distinctio quaerat?
                    </p>
                </div>
                {/* {testi.map((card, i) => {
                return (
                    <div className="d-flex">
                        <Card style={{ width: "18rem" }} className="d-flex" key={i}>
                            <Card.Img variant="top" src={orang1} />
                            <Card.Body>
                                <Card.Title>{card.name}</Card.Title>
                                <Card.Text>{card.pesan}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                );
            })} */}
                <Row className="d-flex justify-content-sm-center">
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                        <Card style={{ width: "18rem", height: "18rem" }} className="d-flex mb-5 shadow-sm rounded-md">
                            <div className="d-flex ">
                                <Card.Img variant="top" src={orang1} width={50} height={50} className="mt-2 justify-content-start float-start" style={{ marginRight: "125px" }} />
                                <div className="d-flex">
                                    <RiStarSFill className="justify-content-end mt-4 me-1 text-warning" />
                                    <RiStarSFill className="justify-content-end mt-4 me-1 text-warning" />
                                    <RiStarSFill className="justify-content-end mt-4 me-1 text-warning" />
                                    <RiStarSFill className="justify-content-end mt-4 me-1 text-warning" />
                                </div>
                            </div>
                            <Card.Body>
                                <Card.Title>Floyd Miles</Card.Title>
                                <Card.Text style={{ fontSize: "12px" }} className="d-inline-block">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam
                                    consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                                    mollit. Exercitation veniam consequat sunt nostrud amet.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                        <Card style={{ width: "18rem", height: "18rem" }} className="d-flex mb-5 shadow-sm rounded-md">
                            <div className="d-flex ">
                                <Card.Img variant="top" src={orang2} width={50} height={50} className="mt-2 justify-content-start float-start" style={{ marginRight: "125px" }} />
                                <div className="d-flex">
                                    <RiStarSFill className="justify-content-end mt-4 me-1 text-warning" />
                                    <RiStarSFill className="justify-content-end mt-4 me-1 text-warning" />
                                    <RiStarSFill className="justify-content-end mt-4 me-1 text-warning" />
                                    <RiStarSFill className="justify-content-end mt-4 me-1 text-warning" />
                                </div>
                            </div>
                            <Card.Body>
                                <Card.Title>Ronald Richards</Card.Title>
                                <Card.Text style={{ fontSize: "12px" }} className="d-inline-block">
                                    ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                        <Card style={{ width: "18rem", height: "18rem" }} className="d-flex mb-5 shadow-sm rounded-md">
                            <div className="d-flex ">
                                <Card.Img variant="top" src={orang3} width={50} height={50} className="mt-2 justify-content-start float-start" />
                            </div>
                            <Card.Body>
                                <Card.Title>Savannah Nguyen</Card.Title>
                                <Card.Text style={{ fontSize: "12px" }} className="d-inline-block">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam
                                    consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                                    mollit. Exercitation veniam consequat sunt nostrud amet.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                        <Card style={{ width: "18rem", height: "18rem" }} className="d-flex mb-5 shadow-sm rounded-md">
                            <div className="d-flex ">
                                <Card.Img variant="top" src={orang4} width={50} height={50} className="mt-2 justify-content-start float-start" />
                            </div>
                            <Card.Body>
                                <Card.Title>Floyd Miles</Card.Title>
                                <Card.Text style={{ fontSize: "12px" }} className="d-inline-block">
                                    ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                <div className="d-flex justify-content-center mt-3 mb-5 pb-5">
                    <span className="border border-danger mx-2 py-1 px-1 bg-danger rounded-circle"></span>
                    <span className="border border-secondary mx-2 py-1 px-1 bg-secondary rounded-circle"></span>
                    <span className="border border-secondary mx-2 py-1 px-1 bg-secondary rounded-circle"></span>
                    <span className="border border-secondary mx-2 py-1 px-1 bg-secondary rounded-circle"></span>
                </div>
            </Container>
            <div className="bg-bawah d-none d-sm-block d-sm-none d-md-block">
                <Container>
                    <Row>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-5 pt-5">
                            <div className="text-white">
                                <h1 className="mb-5">
                                    Available and <br />
                                    Download Anytime
                                </h1>
                                <p className="mb-5">A Lorem Ipsum is simply dummy text of the printing and </p>
                            </div>
                            <div className="d-flex mb-5">
                                <img src={play} alt="playstore" className="me-5" />

                                <img src={app} alt="appstore" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <img src={kurir} alt="kurir" style={{ marginLeft: "100px", marginTop: "-130px" }} />
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Testimoni;
