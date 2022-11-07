import React from "react";
import { CDBFooter, CDBBox } from "cdbreact";
import { Container } from "react-bootstrap";
import logo from "../../src/image/logo.svg";
import fb from "../../src/image/fb.svg";
import tw from "../../src/image/tw.svg";
import ig from "../../src/image/ig.svg";

export const Footer = () => {
    return (
        <Container>
            <CDBFooter>
                <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: "90%" }}>
                    <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                        <CDBBox>
                            <a href="/" className="d-flex align-items-center p-0 text-dark">
                                <img alt="logo" src={logo} width="100px" />
                            </a>
                            <p className="my-3 text-secondary" style={{ width: "350px" }}>
                                A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                            </p>
                            <CDBBox display="flex" className="mt-4">
                                <img src={fb} alt="facebook" className="mx-2" />
                                <img src={tw} alt="twitter" className="mx-2" />
                                <img src={ig} alt="instagram" className="mx-2" />
                            </CDBBox>
                        </CDBBox>
                        <CDBBox>
                            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                                Menu Bantuan
                            </p>
                            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
                                <p className="my-3 text-secondary" href="/">
                                    Keunggulan
                                </p>
                                <p className="my-3 text-secondary" href="/">
                                    Fitur Aplikasi
                                </p>
                                <p className="my-3 text-secondary" href="/">
                                    Testimoni
                                </p>
                            </CDBBox>
                        </CDBBox>
                        <CDBBox>
                            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                                Informasi Kontak
                            </p>
                            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
                                <p className="my-3 text-secondary" href="/">
                                    0812-9797-1227
                                </p>
                                <p className="my-3 text-secondary" href="/">
                                    0812-9797-1227
                                </p>
                                <p className="my-3 text-secondary" href="/">
                                    Jbgtranshipping@gmail.com
                                </p>
                            </CDBBox>
                        </CDBBox>
                    </CDBBox>
                    <small className="text-center mt-5 text-secondary">All rights reserved&copy;2022.</small>
                </CDBBox>
            </CDBFooter>
        </Container>
    );
};
