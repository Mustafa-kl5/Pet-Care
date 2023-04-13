import React from "react";
import "../../componentStyle/Information&Treatment/InformationText.css";
export default function InformationText(props) {
  const Breed = props.BreedText;
  console.log(Breed);
  return (
    <div className="text-holder">
      <div className="AnimalBreed-label">{Breed}</div>
      <div className="BreedDesc">
        The Persian cat (Persian: گربه پارسی, romanized: Gorbe'-ye Pârsi), also
        known as the Persian longhair, is a long-haired breed of cat
        characterized by a round face and short muzzle. The first documented
        ancestors of Persian cats were imported into Italy from Persia around
        1620.[1][2] Widely recognized by cat fancy since the late 19th century,
        Persian cats were first adopted by the British, and later by American
        breeders after World War II. Some cat fancier organizations' breed
        standards subsume the Himalayan and Exotic Shorthair as variants of this
        breed, while others generally treat them as separate breeds.
      </div>
    </div>
  );
}
