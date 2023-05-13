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
  const [isLoading, setIsLoading] = useState(true);
  var { breed } = useParams();
  var { type } = useParams();
  breed = breed.replace(":", "");
  type = type.replace(":", "");
  useEffect(() => {
    getAnimalData();
  }, []);
  const getAnimalData = async () => {
    const response = await fetch(
      "http://localhost:4111/InformationPage/getAnimalInformation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: type,
          breed: breed,
        }),
      }
    );
    const data = await response.json();
    setdata(data);
    setIsLoading(false);
  };
  console.log(data);
  return (
    <MainBackGround>
      <ContentHolder>
        <InformationAndTreatmentHeader />
        {isLoading ? (
          <p>loading</p>
        ) : (
          <ScrollBar>
            <InformationandTreatmentHeaderType AnimalType={type} />
            <InformationPageSwiper Swiper={data[0].images} />

            <InformationText Breed={breed} Information={data[0].information} />
            <InformationLocation location={data[0].clinicLocation} />
          </ScrollBar>
        )}
      </ContentHolder>
    </MainBackGround>
  );
}
