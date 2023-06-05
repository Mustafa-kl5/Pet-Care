const AnimalTypes = ["Cat", "Dog", "Hamster", "Bird"];

export const animalTypeSelector = () => {
  const animalTypesArray = [];
  AnimalTypes.map((animalType) => {
    animalTypesArray.push(
      <option key={animalType} value={animalType}>
        {animalType}
      </option>
    );
  });
  return animalTypesArray;
};
