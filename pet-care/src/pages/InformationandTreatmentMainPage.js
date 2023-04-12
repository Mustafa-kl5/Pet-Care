import React from "react";
import InformationAndTreatmentHeader from "../shaerdComponents/Information&TreatmentHeader";
import InformationandTreatmentHeaderType from "../shaerdComponents/InformationandTreatmentHeaderType";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import ScrollBar from "../shaerdComponents/ScrollBar";
import BreedimageSwipper from "../components/Information&Treatment/BreedimageSwipper";

export default function InformationandTreatmentMainPage() {
  return (
    <MainBackGround>
      <ContentHolder>
        <InformationAndTreatmentHeader />
        <BreedimageSwipper />
        <InformationandTreatmentHeaderType />
        <ScrollBar></ScrollBar>
      </ContentHolder>
    </MainBackGround>
  );
}
