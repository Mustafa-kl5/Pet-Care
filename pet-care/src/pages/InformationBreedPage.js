import React, { useEffect, useState } from "react";
import BreedCard from "../components/Information&Treatment/BreedCard";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import InformationCardHolder from "../components/Information&Treatment/InformationCardHolder";
import { useParams } from "react-router-dom";
import api from "../services/api";
import InformationandTreatmentHeaderType from "../shaerdComponents/InformationandTreatmentHeaderType";
import { Link } from "react-router-dom";
import LoadingBar from "../shaerdComponents/LoadingBar";
export default function InformationBreedPage() {
  const [InformationData, setInformationData] = useState([]);
  const [typeImagePath, setImagePath] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { type, src } = useParams();
  let animalType = type.replace(":", "");
  let typeID = src.replace(":", "");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await api.post("/InformationPage/getBreed", {
        type: animalType,
        typeID: typeID,
      });

      const json = await response.data;
      setImagePath(json.animalType.TypeImage[0].fileName);
      setInformationData(json.informationBlog);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <MainBackGround>
      <ContentHolder>
        <InformationandTreatmentHeaderType
          AnimalTypeImage={typeImagePath}
          AnimalType={animalType}
        />
        {isLoading ? (
          <div className="center-loading-information">
            <LoadingBar />
          </div>
        ) : (
          <InformationCardHolder>
            {InformationData?.map((data) => (
              <Link
                key={data._id}
                to={`/InformationandTreatmentMainPage/:${data.animalBreed}/:${data.animalType}/:${typeID}`}
                className="Animal-Breed-Link"
              >
                <BreedCard
                  BreedName={data.animalBreed}
                  BreedImage={data.images[0]}
                />
              </Link>
            ))}
          </InformationCardHolder>
        )}
      </ContentHolder>
    </MainBackGround>
  );
}
