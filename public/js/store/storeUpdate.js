import { getAllCars } from "./apiGarage.js.js";
import { getAllWinners } from "./apiWinners.js.js";
import { store } from "./store.js";

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

export const storeUpdate = async () => {
  await updateCars();
  await updateWinners();
};
