import React, { useEffect, useState } from "react";
import InformationAndTreatmentHeader from "../shaerdComponents/Information&TreatmentHeader";
import InformationandTreatmentHeaderType from "../shaerdComponents/InformationandTreatmentHeaderType";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import ScrollBar from "../shaerdComponents/ScrollBar";
import InformationPageSwiper from "../components/Information&Treatment/InformationPageSwiper";
import InformationText from "../components/Information&Treatment/InformationText";
import InformationLocation from "../components/Information&Treatment/InformationLocation";
import { useParams } from "react-router-dom";
import api from "../services/api";
export default function InformationandTreatmentMainPage() {
  const [data, setdata] = useState([]);
  const [typeImage, setTypeImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
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
    setTypeImage(json.animalType.TypeImage[0].fileName);
    setIsLoading(false);
  };
  return (
    <MainBackGround>
      <ContentHolder>
        <InformationAndTreatmentHeader />
        {isLoading ? (
          <p>loading</p>
        ) : (
          <ScrollBar>
            <InformationandTreatmentHeaderType
              AnimalType={typeName}
              AnimalTypeImage={typeImage}
            />
            <InformationPageSwiper Swiper={data[0].images} />

            <InformationText
              Breed={breedName}
              Information={data[0].information}
            />
            <InformationLocation location={data[0].clinicLocation} />
          </ScrollBar>
        )}
      </ContentHolder>
    </MainBackGround>
  );
}
