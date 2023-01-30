import carModelsList from '../car-components/carModelsList.js';
import carNamesList from '../car-components/carNamesList.js';

const getRandomCarName = () => {
  const carName = carNamesList[Math.floor(Math.random() * carModelsList.length)];
  const carModel = carModelsList[Math.floor(Math.random() * carModelsList.length)];
  return `${carName} ${carModel}`;
};

export default getRandomCarName;
