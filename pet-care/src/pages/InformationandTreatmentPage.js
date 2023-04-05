import React from "react";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import InformationAndTreatmentHeader from "../shaerdComponents/Information&TreatmentHeader";

import InformationCardHolder from "../components/Information&Treatment/InformationCardHolder";
import InformationType from "../components/Information&Treatment/InformationType";
export default function InformationTreatment(props) {
  return (
    <MainBackGround>
      <ContentHolder>
        <InformationAndTreatmentHeader />
        <InformationType />
        <InformationCardHolder />
      </ContentHolder>
    </MainBackGround>
  );
}
