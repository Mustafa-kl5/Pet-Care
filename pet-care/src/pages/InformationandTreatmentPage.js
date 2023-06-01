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
import api from "../services/api";
import { useEffect, useState } from "react";
import ScrollBar from "../shaerdComponents/ScrollBar";
export default function InformationTreatmentPage() {
  const [TypeData, setTypeData] = useState();
  const [IsLoading, setIsLoading] = useState(true);
  const getType = async () => {
    const response = await api.get("/InformationPage/getType", {});
    const json = await response.data;
    setTypeData(json.allModelsData[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    getType();
  }, []);
  console.log(TypeData);
  return (
    <MainBackGround>
      <ContentHolder>
        <InformationAndTreatmentHeader />
        <ScrollBar>
          <InformationCardHolder
            AnimalTypePaddingT={4}
            AnimalTypePaddingL={1.3}
          >
            {IsLoading ? (
              <div> isLoading</div>
            ) : (
              <>
                {TypeData.map((ele) => (
                  <Link
                    className="animal-type-link"
                    to={`/InformationBreedPage/:${ele.TypeName}/:${ele._id}`}
                    key={ele._id}
                  >
                    <TypeCard
                      TypeName={ele.TypeName}
                      TypeImage={ele.TypeImage[0].fileName}
                    ></TypeCard>
                  </Link>
                ))}
              </>
            )}
          </InformationCardHolder>
        </ScrollBar>
      </ContentHolder>
    </MainBackGround>
  );
}
