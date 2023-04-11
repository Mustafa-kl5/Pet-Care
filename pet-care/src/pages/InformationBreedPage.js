import React from "react";
import BreedCard from "../components/Information&Treatment/BreedCard";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import InformationAndTreatmentHeader from "../shaerdComponents/Information&TreatmentHeader";
import InformationCardHolder from "../components/Information&Treatment/InformationCardHolder";
import catbreed1 from "../Image/Cat-Breed1.png";
import ScrollBar from "../shaerdComponents/ScrollBar";
export default function InformationBreedPage() {
import { useParams } from "react-router-dom";
import catImage from "../Image/Cat-Breed2.png";
export default function InformationBreedPage() {
  const { type } = useParams();
  console.log(type);
  return (
    <MainBackGround>
      <ContentHolder>
        <InformationAndTreatmentHeader />
<<<<<<< HEAD
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
=======
        <InformationCardHolder>
          <BreedCard BreedName="Ragdoll Cat" BreedImage={catImage} />
          <BreedCard BreedName="Persian Cat" />
          <BreedCard BreedName="Scoflot" />
          <BreedCard BreedName="Scoflot" />
        </InformationCardHolder>
>>>>>>> d8704a2b9f189585a13dcf2d8b598e1e6c3c0aff
      </ContentHolder>
    </MainBackGround>
  );
}
