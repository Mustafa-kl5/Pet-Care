import React from "react";
import BreedCard from "../components/Information&Treatment/BreedCard";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import InformationAndTreatmentHeader from "../shaerdComponents/Information&TreatmentHeader";
import InformationCardHolder from "../components/Information&Treatment/InformationCardHolder";
import catbreed1 from "../Image/Cat-Breed1.png";
import ScrollBar from "../shaerdComponents/ScrollBar";
import { useParams } from "react-router-dom";
import InformationandTreatmentHeaderType from "../shaerdComponents/InformationandTreatmentHeaderType";
import { Link } from "react-router-dom";
export default function InformationBreedPage() {
  const { type } = useParams();
  var Type = type.replace(":", "");
  const scrollHeight = 47;
  return (
    <MainBackGround>
      <ContentHolder>
        <InformationAndTreatmentHeader />

        <InformationandTreatmentHeaderType AnimalType={Type} />
        <ScrollBar Height={scrollHeight}>
          <InformationCardHolder>
            <Link
              to={"/InformationandTreatmentMainPage/:Ragdoll Cat" + "/:" + Type}
              className="Animal-Breed-Link"
            >
              <BreedCard BreedName="Ragdoll Cat" BreedImage={catbreed1} />
            </Link>
            <Link
              to={"/InformationandTreatmentMainPage/:Persian Cat" + "/:" + Type}
              className="Animal-Breed-Link"
            >
              <BreedCard BreedName="Persian Cat" BreedImage={catbreed1} />
            </Link>
            <Link
              to={"/InformationandTreatmentMainPage/:Scoflot" + "/:" + Type}
              className="Animal-Breed-Link"
            >
              <BreedCard BreedName="Scoflot" BreedImage={catbreed1} />
            </Link>
            <Link
              to={"/InformationandTreatmentMainPage/:Scoflot" + "/:" + Type}
              className="Animal-Breed-Link"
            >
              <BreedCard BreedName="Scoflot" BreedImage={catbreed1} />
            </Link>
            <Link
              to={"/InformationandTreatmentMainPage/:Ragdoll Cat" + "/:" + Type}
              className="Animal-Breed-Link"
            >
              <BreedCard BreedName="Ragdoll Cat" BreedImage={catbreed1} />
            </Link>
            <Link
              to={"/InformationandTreatmentMainPage/:Persian Cat" + "/:" + Type}
              className="Animal-Breed-Link"
            >
              <BreedCard BreedName="Persian Cat" BreedImage={catbreed1} />
            </Link>
            <BreedCard BreedName="Scoflot" BreedImage={catbreed1} />
            <BreedCard BreedName="Scoflot" BreedImage={catbreed1} />
          </InformationCardHolder>
        </ScrollBar>
      </ContentHolder>
    </MainBackGround>
  );
}
