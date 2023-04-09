import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import InformationAndTreatmentHeader from "../shaerdComponents/Information&TreatmentHeader";

import InformationCardHolder from "../components/Information&Treatment/InformationCardHolder";
export default function InformationTreatment(props) {
  return (
    <MainBackGround>
      <ContentHolder>
        <InformationAndTreatmentHeader />
        <InformationCardHolder />
      </ContentHolder>
    </MainBackGround>
  );
}
