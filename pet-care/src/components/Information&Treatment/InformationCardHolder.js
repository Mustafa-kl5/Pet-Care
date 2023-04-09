import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import TypeCard from "./TypeCard";
import BreedCard from "./BreedCard";
import "../../componentStyle/Information&Treatment/InformationCardHolder.css";
import { Link } from "react-router-dom";
export default function InformationCardHolder() {
  const useNav = useNavigate();
  const HandleClick = () => {
    useNav("/Store");
  };
  return (
    <div className="Information-Scroll">
      <div className="Information-Holder">
        <div onClick={HandleClick}>
          <TypeCard TypeName="Cats" />
        </div>

        <TypeCard TypeName="Dogs" />
        <TypeCard TypeName="Birds" />
        <TypeCard TypeName="Rabbits" />
        <BreedCard BreedName="British Shorthair" />
        <BreedCard BreedName="British Shorthair" />
        <BreedCard BreedName="British Shorthair" />
        <BreedCard BreedName="British Shorthair" />
      </div>
    </div>
  );
}
