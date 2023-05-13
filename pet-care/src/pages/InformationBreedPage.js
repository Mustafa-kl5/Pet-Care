import React, { useEffect, useState } from "react";
import BreedCard from "../components/Information&Treatment/BreedCard";
import ContentHolder from "../UI/ContentHolder";
import MainBackGround from "../UI/MainBackGround";
import InformationAndTreatmentHeader from "../shaerdComponents/Information&TreatmentHeader";
import InformationCardHolder from "../components/Information&Treatment/InformationCardHolder";
import catbreed1 from "../Image/Cat-Breed1.png";
import ScrollBar from "../shaerdComponents/ScrollBar";
import { useParams } from "react-router-dom";
import api from "../services/api";
import InformationandTreatmentHeaderType from "../shaerdComponents/InformationandTreatmentHeaderType";
import { Link } from "react-router-dom";
export default function InformationBreedPage() {
  const [InformationData, setInformationData] = useState([]);
  const { type } = useParams();
  var AnimalType = type.replace(":", "");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:4111/InformationPage/getBreed",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            type: AnimalType,
          }),
        }
      );

      const data = await response.json();
      setInformationData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const scrollHeight = 47;

  return (
    <MainBackGround>
      <ContentHolder>
        <InformationAndTreatmentHeader />

        <ScrollBar Height={scrollHeight}>
          <InformationandTreatmentHeaderType AnimalType={AnimalType} />
          <InformationCardHolder>
            {InformationData.map((data) => (
              <Link
                key={data._id}
                to={`/InformationandTreatmentMainPage/${data.animalBreed}/${AnimalType}`}
                className="Animal-Breed-Link"
              >
                <BreedCard
                  BreedName={data.animalBreed}
                  BreedImage={data.images[0]}
                />
              </Link>
            ))}
          </InformationCardHolder>
        </ScrollBar>
      </ContentHolder>
    </MainBackGround>
  );
}
