import React from "react";
import "./PortfolioCard.css";
import { Link } from "react-router-dom";
import { Card, CardTitle, CardImg, CardImgOverlay } from "reactstrap";
import { Images } from "../../assets/images";
export const PortfolioCard = () => {
    return (
        <div className="pro-card container">
            <div className="row">
                <div className="col-sm-4">
                    <Link to={"/gallery/portrait"}>
                        <Card inverse>
                            <CardImg
                                width="100%"
                                src={Images.card1}
                                alt="Card image cap"
                            />
                            <CardImgOverlay>
                                <CardTitle>Portrait</CardTitle>
                                <div className="view-button">View More</div>
                            </CardImgOverlay>
                        </Card>
                    </Link>
                </div>
                <div className="col-sm-4">
                    <Link to={"/gallery/landscape"}>
                        <Card inverse>
                            <CardImg
                                width="30%"
                                src={Images.card2}
                                alt="Card image cap"
                            />
                            <CardImgOverlay>
                                <CardTitle>Landscape</CardTitle>
                                <div className="view-button">View More</div>
                            </CardImgOverlay>
                        </Card>
                    </Link>
                </div>
                <div className="col-sm-4">
                    <Link to={"/gallery/portrait"}>
                        <Card inverse>
                            <CardImg
                                width="30%"
                                src={Images.card3}
                                alt="Card image cap"
                            />
                            <CardImgOverlay>
                                <CardTitle>Portrait</CardTitle>
                                <div className="view-button">View More</div>
                            </CardImgOverlay>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    );
};
