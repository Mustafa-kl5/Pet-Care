import React, { useEffect, useState } from "react";
import InformationandTreatmentHeaderType from "../shaerdComponents/InformationandTreatmentHeaderType";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import LocationView from "../shaerdComponents/LocationView";
import InformationPageSwiper from "../components/Information&Treatment/InformationPageSwiper";
import InformationText from "../components/Information&Treatment/InformationText";
import { useParams } from "react-router-dom";
import "../componentStyle/Information&Treatment/InformationandTreatmentMainPage.css";
import api from "../services/api";
import LoadingBar from "../shaerdComponents/LoadingBar";
import { SplitArtical } from "../Constant/SplitArtical";
export default function InformationandTreatmentMainPage() {
  const [data, setdata] = useState([]);
  const [typeImage, setTypeImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [Artical, setArtical] = useState([]);
  let { breed, type, src } = useParams();
  let breedName = breed.replace(":", "");
  let typeName = type.replace(":", "");
  let TypeID = src.replace(":", "");
  useEffect(() => {
    getAnimalData();
  }, []);
  const getAnimalData = async () => {
    const response = await api.post("/InformationPage/getAnimalInformation", {
      type: typeName,
      breed: breedName,
      typeID: TypeID,
    });

    const json = await response.data;
    setdata(json.animalData);
    setTypeImage(json.animalType.TypeImage[0]?.fileName);
    setArtical(SplitArtical(json.animalData.information));
    console.log(json.animalData.clinicLocation.latitude);
    setIsLoading(false);
  };

  return (
    <MainBackGround>
      <ContentHolder>
        <InformationandTreatmentHeaderType
          AnimalType={typeName}
          AnimalTypeImage={typeImage}
        />

        {isLoading ? (
          <div className="center-loading-information">
            <LoadingBar />
          </div>
        ) : (
          <div className="information-and-treatment-scroll">
            <div className="information-and-treatment-scroll-holder">
              <InformationPageSwiper Swiper={data.images} />
              <InformationText Breed={breedName} Information={Artical} />

              <LocationView
                width="48rem"
                height="30rem"
                lat={data.clinicLocation.latitude}
                lng={data.clinicLocation.longitude}
                textCondition={false}
              />
              {console.log(
                data.clinicLocation.latitude,
                data.clinicLocation.longitude
              )}
            </div>
          </div>
        )}
      </ContentHolder>
    </MainBackGround>
  );
}
