export const Selector = (statrindex, lastIndex, arrayTarget) => {
  for (let index = statrindex; index <= lastIndex; index++) {
    if (index < 10) {
      arrayTarget.push(
        <option key={index} value={`0${index}`}>
          0{index}
        </option>
      );
    } else {
      arrayTarget.push(
        <option key={index} value={`${index}`}>
          {index}
        </option>
      );
    }
  }
};
