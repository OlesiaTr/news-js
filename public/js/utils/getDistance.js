const getPositionOfElements = (el) => {
  const { left, width } = el.getBoundingClientRect();
  return left + width;
};

const getDistance = (car, flag) => {
  const startPosition = getPositionOfElements(car);
  const finishPosition = getPositionOfElements(flag);
  return finishPosition - startPosition;
};

export default getDistance;
