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
          <Link to="/InformationBreedPage/:Cats" className="animal-type-link">
            <TypeCard TypeName="Cats" TypeImage={CatType}></TypeCard>
          </Link>
          <Link to="/InformationBreedPage/:Dogs" className="animal-type-link">
            <TypeCard TypeName="Dogs" TypeImage={DogType}></TypeCard>
          </Link>
          <Link to="/InformationBreedPage/:Birds" className="animal-type-link">
            <TypeCard TypeName="Birds" TypeImage={BirdType}></TypeCard>
          </Link>
          <Link
            to="/InformationBreedPage/:Rabbits"
            className="animal-type-link"
          >
            <TypeCard TypeName="Rabbits" TypeImage={RabbitType}></TypeCard>
          </Link>
        </InformationCardHolder>
      </ContentHolder>
    </MainBackGround>
  );
}
