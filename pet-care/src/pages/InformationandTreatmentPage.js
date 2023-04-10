import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import InformationAndTreatmentHeader from "../shaerdComponents/Information&TreatmentHeader";
import TypeCard from "../components/Information&Treatment/TypeCard";
import InformationCardHolder from "../components/Information&Treatment/InformationCardHolder";
import { Link } from "react-router-dom";
export default function InformationTreatmentPage() {
  return (
    <MainBackGround>
      <ContentHolder>
        <InformationAndTreatmentHeader />
        <InformationCardHolder>
          <Link to="/InformationBreedPage/:Cats">
            <TypeCard TypeName="Cats"></TypeCard>
          </Link>

          <TypeCard TypeName="Dogs"></TypeCard>
          <TypeCard TypeName="Birds" TypeImage></TypeCard>
          <TypeCard TypeName="Rabbits" TypeImage></TypeCard>
        </InformationCardHolder>
      </ContentHolder>
    </MainBackGround>
  );
}
