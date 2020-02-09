import React from "react";
import "./PortfolioCard.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Link } from "react-router-dom";
import { api } from "../../utils/config";
import { Card, CardTitle, CardImg, CardImgOverlay } from "reactstrap";
export const PortfolioCard = () => {
  
  return (
    <div className="pro-card container">
      <div className="row">
        <div className="col-sm-4">
          <Card inverse>
            <CardImg
              width="100%"
              src={api.baseURL + "/images/card/port" + 1 + ".jpg"}
              alt="Card image cap"
            />
            <CardImgOverlay>
              <CardTitle>Portrait</CardTitle>
              <Link to={"/gallery/"+"portrait"}>
              <div className="view-button">View More</div>
              </Link>
            </CardImgOverlay>
          </Card>
        </div>
        <div className="col-sm-4">
          <Card inverse>
            <CardImg
              width="30%"
              src={api.baseURL + "/images/card/port" + 2 + ".jpg"}
              alt="Card image cap"
            />
            <CardImgOverlay>
              <CardTitle>Landscape</CardTitle>
              <Link to={"/gallery/"+"landscape"}>
              <div className="view-button">View More</div>
              </Link>
            </CardImgOverlay>
          </Card>
        </div>
        <div className="col-sm-4">
          <Card inverse>
            <CardImg
              width="30%"
              src={api.baseURL + "/images/card/port" + 3 + ".jpg"}
              alt="Card image cap"
            />
            <CardImgOverlay>
              <CardTitle>Portrait</CardTitle>
              <Link to={"/gallery/"+"portrait"}>
                <div className="view-button">View More</div>
              </Link>
            </CardImgOverlay>
          </Card>
        </div>
      </div>
    </div>
  );
};
