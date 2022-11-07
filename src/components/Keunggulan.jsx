import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import { BsBoxSeam } from "react-icons/bs";
import { FaRegHandPointer } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Keunggulan = () => {
    return (
        <div className="mt-5 mb-5">
            <Container className="position-relative">
                <h1 className="text-center mb-5">Keunggulan Kami</h1>
                <p className="text-center mb-5 fs-5 text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore velit possimus, distinctio eum vitae nisi dicta illo tempora quas cumque reiciendis laborum non
                    repudiandae voluptatem blanditiis, amet voluptates vero dignissimos quae nam dolores omnis! Dolore nihil harum saepe dicta iure quam quod illum, dolores neque,
                    repellendus nesciunt voluptas ex magni possimus, ullam repudiandae corrupti eligendi sit consequatur tenetur accusamus cumque nostrum beatae! Rerum consequatur,
                    cumque quod deleniti vero voluptates! Dolore aut illo praesentium alias, architecto est quaerat. Eaque, amet. Itaque sunt consequuntur, provident expedita
                    dolorem explicabo fugiat consequatur excepturi modi. Incidunt reiciendis odit aspernatur eum asperiores similique at veritatis explicabo!
                </p>
                {/* Cards */}
                <Row>
                    <div className="d-lg-flex mx-md-5 mx-0 mb-5 d-sm-flex my-sm-4">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <Card style={{ width: "18rem" }} className="shadow-sm">
                                <Card.Body className="d-flex flex-wrap justify-content-center">
                                    <span className="border py-4 d-flex align-item-center mb-4 w-25 h-75 items-center bg-danger opacity-25 position-relative"></span>
                                    <BsBoxSeam className="position-absolute m-3 text-danger fs-4" />
                                </Card.Body>
                                <div className="text-center">
                                    <p className="text-center fs-5 fw-semibold mb-3">Kirim Ke Berbagai Negara</p>
                                    <p className="mb-4 text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo recusandae modi placeat ut</p>
                                </div>
                            </Card>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <Card style={{ width: "18rem" }} className="shadow-sm">
                                <Card.Body className="d-flex flex-wrap justify-content-center">
                                    <span className="border py-4 d-flex align-item-center mb-4 w-25 h-75 items-center bg-danger opacity-25 position-relative"></span>
                                    <FaRegHandPointer className="position-absolute m-3 text-danger fs-4" />
                                </Card.Body>
                                <div className="text-center">
                                    <p className="text-center fs-5 fw-semibold mb-3">Mudah Digunakan</p>
                                    <p className="mb-4 text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo recusandae modi placeat ut</p>
                                </div>
                            </Card>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <Card style={{ width: "18rem" }} className="shadow-sm">
                                <Card.Body className="d-flex flex-wrap justify-content-center">
                                    <span className="border py-4 d-flex align-item-center mb-4 w-25 h-75 items-center bg-danger opacity-25 position-relative"></span>
                                    <AiOutlineSafetyCertificate className="position-absolute m-3 text-danger fs-4" />
                                </Card.Body>
                                <div className="text-center">
                                    <p className="text-center fs-5 fw-semibold mb-3">Pengiriman Aman</p>
                                    <p className="mb-4 text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo recusandae modi placeat ut</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Keunggulan;
