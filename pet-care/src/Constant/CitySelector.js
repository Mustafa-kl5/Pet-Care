const citys = [
  "Amman",
  "Jerash",
  "Zarqa",
  "Aqaba",
  "Al-Mafraq",
  "Irbid",
  "Ajloun",
  "At-Tafilah",
  "Ma'an",
  "Kerak",
];

export const citySelector = () => {
  const citysArray = [];
  citys.map((city) => {
    citysArray.push(
      <option key={city} value={city}>
        {city}
      </option>
    );
  });
  return citysArray;
};
