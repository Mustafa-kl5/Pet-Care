import React from "react";
import "../../componentStyle/Home/SecondHalf.css";
import Discover from "../../Image/DiscoverLogo.png";
import Posts from "../../Image/Findlogo.png";
import Store from "../../Image/ShopLogo.png";
import { Link } from "react-router-dom";
export default function SecondHalf() {
  return (
    <>
      <div className="Label">
        <div className="Label-Text">Services Category </div>
        <div className="Line"></div>
      </div>

      <div className="Card-Holder">
        <Link to={"/AdoptionPost"} className="Card-Link">
          <div className="Card-Blue">
            <div className="Card-Image"></div>
            <div className="Card-Text">Ask Other</div>
          </div>
        </Link>
        <Link to={"/Store"} className="Card-Link">
          <div className="Card-Yellow">
            <div
              className="Card-Image"
              style={{ backgroundImage: `url("${Store}")` }}
            ></div>

            <div className="Card-Text">Shop for you pet</div>
          </div>
        </Link>
        <Link to={"/Posts"} className="Card-Link">
          <div className="Card-Blue">
            <div
              className="Card-Image"
              style={{ backgroundImage: `url("${Posts}")` }}
            ></div>
            <div className="Card-Text">Find your Pet</div>
          </div>
        </Link>
        <Link to={"/InformationTreatment"} className="Card-Link">
          <div className="Card-Yellow">
            <div
              className="Card-Image"
              style={{
                backgroundImage: `url("${Discover}")`,
              }}
            ></div>
            <div className="Card-Text">Discover your Pet</div>
          </div>
        </Link>
      </div>
    </>
  );
}
