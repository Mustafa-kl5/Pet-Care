import React from "react";
import BreedCard from "../components/Information&Treatment/BreedCard";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import InformationAndTreatmentHeader from "../shaerdComponents/Information&TreatmentHeader";
import InformationCardHolder from "../components/Information&Treatment/InformationCardHolder";
import { useParams } from "react-router-dom";
import catImage from "../Image/Cat-Breed2.png";
export default function InformationBreedPage() {
  const { type } = useParams();
  console.log(type);

  return (
    <MainBackGround>
      <ContentHolder>
        <InformationAndTreatmentHeader />
        <InformationCardHolder>
          <BreedCard BreedName="Ragdoll Cat" BreedImage={catImage} />
          <BreedCard BreedName="Persian Cat" />
          <BreedCard BreedName="Scoflot" />
          <BreedCard BreedName="Scoflot" />
        </InformationCardHolder>
      </ContentHolder>
    </MainBackGround>
  );
}
