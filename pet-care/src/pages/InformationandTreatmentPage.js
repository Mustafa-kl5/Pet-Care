import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import InformationAndTreatmentHeader from "../shaerdComponents/Information&TreatmentHeader";
import TypeCard from "../components/Information&Treatment/TypeCard";
import InformationCardHolder from "../components/Information&Treatment/InformationCardHolder";

import CatType from "../Image/CatLogo.png";
import DogType from "../Image/DogLogo.png";
import RabbitType from "../Image/RabbitLogo.png";
import BirdType from "../Image/BirdLogo.png";
import { Link } from "react-router-dom";
export default function InformationTreatmentPage() {
  return (
    <MainBackGround>
      <ContentHolder>
        <InformationAndTreatmentHeader />

        <InformationCardHolder>
<<<<<<< HEAD
          <TypeCard TypeName="Cats" TypeImage={CatType}></TypeCard>
          <TypeCard TypeName="Dogs" TypeImage={DogType}></TypeCard>
          <TypeCard TypeName="Birds" TypeImage={RabbitType}></TypeCard>
          <TypeCard TypeName="Rabbits" TypeImage={BirdType}></TypeCard>
=======
          <Link to="/InformationBreedPage/:Cats">
            <TypeCard TypeName="Cats"></TypeCard>
          </Link>

          <TypeCard TypeName="Dogs"></TypeCard>
          <TypeCard TypeName="Birds" TypeImage></TypeCard>
          <TypeCard TypeName="Rabbits" TypeImage></TypeCard>
>>>>>>> d8704a2b9f189585a13dcf2d8b598e1e6c3c0aff
        </InformationCardHolder>
      </ContentHolder>
    </MainBackGround>
  );
}
