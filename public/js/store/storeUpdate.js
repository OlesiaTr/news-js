import { getAllCars } from '../api/apiGarage.js';
import { getAllWinners } from '../api/apiWinners.js';
import store from './store.js';

const updateCars = async () => {
  const { items, records } = await getAllCars(store.carsPage);

  store.cars = items;
  store.carsCount = records;
};

const updateWinners = async () => {
  const { items, records } = await getAllWinners({
    page: store.winnersPage,
    sort: store.sortBy,
    order: store.sortOrder,
  });

  store.winners = items;
  store.winnersCount = records;
};

const storeUpdate = async () => {
  await updateCars();
  await updateWinners();
};

export default storeUpdate;
