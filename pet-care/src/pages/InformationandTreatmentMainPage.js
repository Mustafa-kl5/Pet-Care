import React from "react";
import InformationAndTreatmentHeader from "../shaerdComponents/Information&TreatmentHeader";
import InformationandTreatmentHeaderType from "../shaerdComponents/InformationandTreatmentHeaderType";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import ScrollBar from "../shaerdComponents/ScrollBar";
import InformationPageSwiper from "../components/Information&Treatment/InformationPageSwiper";
import InformationText from "../components/Information&Treatment/InformationText";
import InformationLocation from "../components/Information&Treatment/InformationLocation";
import { useParams } from "react-router-dom";
export default function InformationandTreatmentMainPage() {
  var { breed } = useParams();
  breed = breed.replace(":", "");
  var { type } = useParams();
  type = type.replace(":", "");

  return (
    <MainBackGround>
      <ContentHolder>
        <InformationAndTreatmentHeader />

        <ScrollBar>
          <InformationandTreatmentHeaderType AnimalType={type} />
          <InformationPageSwiper SwiperImage />
          <InformationText BreedText={breed} BreedInfo={""} />
          <InformationLocation />
        </ScrollBar>
      </ContentHolder>
    </MainBackGround>
  );
}
