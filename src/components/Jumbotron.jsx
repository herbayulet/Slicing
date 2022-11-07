import React from "react";
import { Container, Row, Card, Form, Button } from "react-bootstrap";
import merahkanan2 from "../../src/image/merah-kanan2.svg";
import ikan1 from "../../src/image/ikan1.svg";
import hp1 from "../../src/image/hp1.svg";
// import playstore from "../../src/image/playstore.svg";
// import appstore from "../../src/image/appstore.svg";
import play from "../../src/image/play.svg";
import app from "../../src/image/app.svg";
import "./Jumbotron.css";

const Jumbotron = () => {
    return (
        <div className="mb-5 mb-sm-0">
            <Container>
                <Row className="mt-5 pt-2 mb-5">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1 className="mb-5 mt-5 pt-5" style={{ fontSize: "55px" }}>
                            Kirim Berbagi Jenis <br />
                            ikan dengan mudah{" "}
                        </h1>
                        <p className="mb-5 text-secondary" style={{ fontSize: "18px" }}>
                            Lorem ipsum is simply dummy text of the printing and <br />
                            typesetting industry. Lorem Ipsum has been industry's
                        </p>
                        <div className="d-flex mb-5">
                            {/* <Card style={{ width: "18rem" }} className="bg-dark text-white">
                                <Card.Body className="d-flex">
                                    <Card.Img variant="top" src={playstore} width={50} height={50} style={{ marginRight: "100px" }} className="m-0" />
                                    <div className="d-inline-block">
                                        <Card.Title style={{ fontSize: "10px" }}>GET IT ON</Card.Title>
                                        <Card.Title>Google Play</Card.Title>
                                    </div>
                                </Card.Body>
                            </Card> */}
                            <img src={play} alt="playstore" className="me-5" />
                            {/* <Card style={{ width: "18rem" }} className="bg-dark text-white mx-sm-5">
                                <Card.Body className="d-flex">
                                    <Card.Img variant="top" src={appstore} width={50} height={50} style={{ marginRight: "100px" }} className="m-0" />
                                    <div className="d-inline-block">
                                        <Card.Title style={{ fontSize: "10px" }}>Download on the</Card.Title>
                                        <Card.Title>App Store</Card.Title>
                                    </div>
                                </Card.Body>
                            </Card> */}
                            <img src={app} alt="appstore" />
                        </div>
                        <div className="d-flex">
                            <div className="d-grid">
                                <p className="fs-2 fw-semibold text-danger">1.9k+</p>
                                <p className="text-secondary fs-5">Active Users</p>
                            </div>
                            <div className="d-grid ps-5">
                                <p className="fs-2 fw-semibold text-danger">20+</p>
                                <p className="text-secondary fs-5">New Features</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-5 d-none d-sm-block d-sm-none d-md-block mb-5" style={{ paddingLeft: "278px" }}>
                        <div className="flex">
                            <img src={merahkanan2} alt="" className="position-relative mt-5 pt-5" style={{ marginRight: "-800px" }} />
                            <img src={ikan1} alt="" className="position-absolute mt-5" />
                            <img src={hp1} alt="" className="position-absolute  " style={{ marginTop: "-150px" }} />
                        </div>
                    </div>
                </Row>
            </Container>
            <div className="bg d-none d-sm-block d-sm-none d-md-block mt-5">
                <Row style={{ marginTop: "200px" }}>
                    <div className="col-lg-6 col-md-6 col-sm-12 d-grid justify-content-center items-center my-5">
                        <div className="text-center text-white">
                            <h1 className="mb-3">Lacak Pengiriman Anda</h1>
                            <p className="d-inline-block mb-5 mx-2">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia veniam, atque aut cum dignissimos numquam tenetur quisquam architecto vitae maiores
                                soluta impedit exercitationem in accusamus, porro aperiam? Consectetur, temporibus quis est voluptatibus vitae soluta? Laborum velit omnis repellat
                                corporis, quasi a totam magni tenetur non doloremque tempora
                            </p>
                        </div>
                        <div className="d-flex justify-content-center items-center" style={{ marginBottom: "250px" }}>
                            <Form>
                                <Form.Group className="" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="lacak pengiriman" className="input-lg" style={{ height: "40px", width: "500px" }} />
                                </Form.Group>
                            </Form>
                            <Button className="text-white px-5 ms-3 fs-5  rounded border-0" style={{ backgroundColor: "#F05830" }}>
                                Lacak
                            </Button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 my-5">
                        <h1 className="text-center text-white mb-5">Cek Tarif Pengiriman Anda</h1>
                        <div className="d-flex justify-content-center items-center mb-5">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Origin" className="input-lg" style={{ height: "40px", width: "250px" }} />
                                </Form.Group>
                            </Form>
                            <Form className="ms-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Destination" className="input-lg" style={{ height: "40px", width: "250px" }} />
                                </Form.Group>
                            </Form>
                        </div>
                        <Button
                            className="text-white px-5 mb-5 fs-5 py-auto rounded border-0 d-flex justify-content-center items-center mx-auto"
                            style={{ backgroundColor: "#F05830", width: "500px" }}
                        >
                            Lacak
                        </Button>
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default Jumbotron;
