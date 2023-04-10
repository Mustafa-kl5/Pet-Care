import React from "react";
import BreedCard from "../components/Information&Treatment/BreedCard";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import InformationAndTreatmentHeader from "../shaerdComponents/Information&TreatmentHeader";
import InformationCardHolder from "../components/Information&Treatment/InformationCardHolder";
export default function InformationBreedPage() {
  const Breed1 = "/src/Image/Cat-Breed1.png";
  const Breed2 = "../Image/Cat-Breed2.png";
  return (
    <MainBackGround>
      <ContentHolder>
        <InformationAndTreatmentHeader />
        <InformationCardHolder>
          <BreedCard BreedName="Ragdoll Cat" BreedImage />
          <BreedCard BreedName="Persian Cat" />
          <BreedCard BreedName="Scoflot" />
          <BreedCard BreedName="Scoflot" />
        </InformationCardHolder>
      </ContentHolder>
    </MainBackGround>
  );
}
