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
export default function InformationBreedPage() {
  const { type } = useParams();

  const scrollHeight = 47;
  return (
    <MainBackGround>
      <ContentHolder>
        <InformationAndTreatmentHeader />

        <InformationandTreatmentHeaderType AnimalType={type} />
        <ScrollBar Height={scrollHeight}>
          <InformationCardHolder>
            <BreedCard BreedName="Ragdoll Cat" BreedImage={catbreed1} />

            <BreedCard BreedName="Persian Cat" BreedImage={catbreed1} />

            <BreedCard BreedName="Scoflot" BreedImage={catbreed1} />
            <BreedCard BreedName="Scoflot" BreedImage={catbreed1} />
            <BreedCard BreedName="Ragdoll Cat" BreedImage={catbreed1} />
            <BreedCard BreedName="Persian Cat" BreedImage={catbreed1} />
            <BreedCard BreedName="Scoflot" BreedImage={catbreed1} />
            <BreedCard BreedName="Scoflot" BreedImage={catbreed1} />
          </InformationCardHolder>
        </ScrollBar>
      </ContentHolder>
    </MainBackGround>
  );
}
