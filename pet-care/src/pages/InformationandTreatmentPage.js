import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import InformationAndTreatmentHeader from "../shaerdComponents/Information&TreatmentHeader";
import TypeCard from "../components/Information&Treatment/TypeCard";
import InformationCardHolder from "../components/Information&Treatment/InformationCardHolder";
import { Link } from "react-router-dom";
import api from "../services/api";
import { useEffect, useState } from "react";
import LoadingBar from "../shaerdComponents/LoadingBar";
export default function InformationTreatmentPage() {
  const [TypeData, setTypeData] = useState();
  const [IsLoading, setIsLoading] = useState(false);

  const getType = async () => {
    setIsLoading(true);
    const response = await api.get("/InformationPage/getType");
    const json = await response.data;
    setTypeData(json.allModelsData[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    getType();
  }, []);

  return (
    <MainBackGround>
      <ContentHolder>
        <InformationAndTreatmentHeader />
        {IsLoading ? (
          <div className="center-loading-information">
            <LoadingBar />
          </div>
        ) : (
          <InformationCardHolder>
            {TypeData?.map((ele) => (
              <Link
                className="animal-type-link"
                to={`/InformationBreedPage/:${ele.TypeName}/:${ele._id}`}
                key={ele._id}
              >
                <TypeCard
                  TypeName={ele.TypeName}
                  TypeImage={ele.TypeImage[0]?.fileName}
                ></TypeCard>
              </Link>
            ))}
          </InformationCardHolder>
        )}
      </ContentHolder>
    </MainBackGround>
  );
}
