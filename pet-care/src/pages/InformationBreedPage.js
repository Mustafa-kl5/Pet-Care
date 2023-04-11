import React from "react";
import BreedCard from "../components/Information&Treatment/BreedCard";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import InformationAndTreatmentHeader from "../shaerdComponents/Information&TreatmentHeader";
import InformationCardHolder from "../components/Information&Treatment/InformationCardHolder";
import catbreed1 from "../Image/Cat-Breed1.png";
import ScrollBar from "../shaerdComponents/ScrollBar";
export default function InformationBreedPage() {
  return (
    <MainBackGround>
      <ContentHolder>
        <InformationAndTreatmentHeader />
        <ScrollBar>
          <InformationCardHolder>
            <BreedCard BreedName="Ragdoll Cat" BreedImage={catbreed1} />
            <BreedCard BreedName="Persian Cat" />
            <BreedCard BreedName="Scoflot" />
            <BreedCard BreedName="Scoflot" />
            <BreedCard BreedName="Ragdoll Cat" BreedImage={catbreed1} />
            <BreedCard BreedName="Persian Cat" />
            <BreedCard BreedName="Scoflot" />
            <BreedCard BreedName="Scoflot" />
            <BreedCard BreedName="Ragdoll Cat" BreedImage={catbreed1} />
            <BreedCard BreedName="Persian Cat" />
            <BreedCard BreedName="Scoflot" />
            <BreedCard BreedName="Scoflot" />
          </InformationCardHolder>
        </ScrollBar>
      </ContentHolder>
    </MainBackGround>
  );
}
