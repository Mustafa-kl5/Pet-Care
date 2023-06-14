export const SplitArtical = (Artical) => {
  const bigText = Artical;
  const splitWords = ["Introduction", "Appearance", "Temperament", "Care"];
  const output = bigText
    .split("/")
    .map((p) => p.trim())
    .filter((p) => p !== "");

  return output;
};
