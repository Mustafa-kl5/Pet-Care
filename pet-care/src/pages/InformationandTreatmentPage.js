import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import InformationAndTreatmentHeader from "../shaerdComponents/Information&TreatmentHeader";
import TypeCard from "../components/Information&Treatment/TypeCard";
import InformationCardHolder from "../components/Information&Treatment/InformationCardHolder";

import CatType from "../Image/CatLogo.png";
import DogType from "../Image/DogLogo.png";
import RabbitType from "../Image/RabbitLogo.png";
import BirdType from "../Image/BirdLogo.png";
export default function InformationTreatmentPage() {
  return (
    <MainBackGround>
      <ContentHolder>
        <InformationAndTreatmentHeader />

        <InformationCardHolder>
          <TypeCard TypeName="Cats" TypeImage={CatType}></TypeCard>
          <TypeCard TypeName="Dogs" TypeImage={DogType}></TypeCard>
          <TypeCard TypeName="Birds" TypeImage={RabbitType}></TypeCard>
          <TypeCard TypeName="Rabbits" TypeImage={BirdType}></TypeCard>
        </InformationCardHolder>
      </ContentHolder>
    </MainBackGround>
  );
}
