import React from "react";
import { Container, Row } from "react-bootstrap";
import merahkanan2 from "../../src/image/merah-kanan2.svg";
import ikan2 from "../../src/image/ikan2.svg";
import hp2 from "../../src/image/hp2.svg";
import merahkanan1 from "../../src/image/merah-kanan1.svg";
import ikan3 from "../../src/image/ikan3.svg";
import hp3 from "../../src/image/hp3.svg";
import ikan4 from "../../src/image/ikan4.svg";
import hp4 from "../../src/image/hp4.svg";

const Method = () => {
    return (
        <div className="mb-5 mb-sm-0">
            <Container>
                {/* ikan 1 */}
                <Row className="mt-5 pt-2 mb-5">
                    <div className="col-lg-6 col-md-6 col-sm-12" style={{ marginTop: "100px" }}>
                        <h1 className="mb-5 mt-5 pt-5" style={{ fontSize: "55px" }}>
                            Berbagai Metode <br />
                            Pengiriman{" "}
                        </h1>
                        <p className="mb-5 text-secondary" style={{ fontSize: "18px" }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi optio vitae dolore repellat quia consequatur illum incidunt. Blanditiis, sit
                            suscipit. Ut eligendi minima perferendis a maxime quaerat? Debitis, odit.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-5 d-none d-sm-block d-sm-none d-md-block" style={{ paddingLeft: "268px" }}>
                        <div className="flex">
                            <img src={merahkanan2} alt="" className="position-relative mt-5 pt-5" style={{ marginRight: "-800px" }} />
                            <img src={ikan2} alt="" className="position-absolute mt-5 pt-5" />
                            <img src={hp2} alt="" className="position-absolute" style={{ marginTop: "-90px", marginLeft: "170px" }} />
                        </div>
                    </div>
                </Row>
                {/* ikan 2 */}
                <Row className="mt-5 pt-2 mb-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-5 d-none d-sm-block d-sm-none d-md-block" style={{ paddingRight: "288px" }}>
                        <div className="flex">
                            <img src={merahkanan1} alt="" className="position-relative mt-5 pt-5" style={{ marginLeft: "-300px" }} />
                            <img src={ikan3} alt="" className="position-absolute" style={{ marginTop: "-335px", marginLeft: "210px" }} />
                            <img src={hp3} alt="" className="position-absolute" style={{ marginTop: "-550px", marginLeft: "-290px" }} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12" style={{ marginTop: "100px" }}>
                        <h1 className="mb-5 mt-5 pt-5" style={{ fontSize: "55px" }}>
                            Lacak Status Pengiriman <br />
                            Anda{" "}
                        </h1>
                        <p className="mb-5 text-secondary" style={{ fontSize: "18px" }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi optio vitae dolore repellat quia consequatur illum incidunt. Blanditiis, sit
                            suscipit. Ut eligendi minima perferendis a maxime quaerat? Debitis, odit.
                        </p>
                    </div>
                </Row>
                {/* ikan 3 */}
                <Row className="mt-5 pt-2 mb-5">
                    <div className="col-lg-6 col-md-6 col-sm-12" style={{ marginTop: "100px" }}>
                        <h1 className="mb-5 mt-5 pt-5" style={{ fontSize: "55px" }}>
                            Check Schedule <br />
                            Pengiriman Anda{" "}
                        </h1>
                        <p className="mb-5 text-secondary" style={{ fontSize: "18px" }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi optio vitae dolore repellat quia consequatur illum incidunt. Blanditiis, sit
                            suscipit. Ut eligendi minima perferendis a maxime quaerat? Debitis, odit.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-5 d-none d-sm-block d-sm-none d-md-block" style={{ paddingLeft: "268px" }}>
                        <div className="flex">
                            <img src={merahkanan2} alt="" className="position-relative mt-5 pt-5" style={{ marginRight: "-800px" }} />
                            <img src={ikan4} alt="" className="position-absolute" style={{ marginTop: "160px" }} />
                            <img src={hp4} alt="" className="position-absolute" style={{ marginTop: "-90px", marginLeft: "170px" }} />
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Method;
