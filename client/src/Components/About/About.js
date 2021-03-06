import React from "react";
import "./About.css";
import { Container, Row, Col, Card } from "reactstrap";
import { Images } from "../../assets/images";

export const About = () => (
    <div className="about">
        <Container>
            <Row>
                <Col xs="12" md="3">
                    <img
                        className="img-thumbnail"
                        alt="author"
                        src={Images.owner}
                    />
                </Col>
                <Col xs="12" md="9">
                    <Card className="text" body>
                        Hi, this is Avik Choudhury. I am a photographer and
                        cinematographer. This website is a part of my work where
                        my latest to starting work is uploaded. The description
                        of all my photos are given here. I always wanted to be a
                        travel flimmaker. I am certified photographer from NAP
                        (National Acadamy of Photography) under international
                        person. Also a certified flimmaker on cinematographer
                        from MFA (Mumbai Flim Acadamy). I am a freelancer have
                        been doing this since a year. I am staying and working
                        in Mumbai right now.
                        <br />
                        Email: avik2510@gmail.com
                        <br />
                        Mobile: +917550904131
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
);
