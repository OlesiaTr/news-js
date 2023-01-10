import { store } from "../store/store.js";

const GARAGE_CARS_PER_PAGE = 7;
const WINNERS_CARS_PER_PAGE = 10;

export const paginationBtnsDisabled = async () => {
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  if (store.view === "garagePage") {
    if (store.carsPage * GARAGE_CARS_PER_PAGE < store.carsCount) {
      nextBtn.disabled = false;
    } else {
      nextBtn.disabled = true;
    }
    if (store.carsPage > 1) {
      prevBtn.disabled = false;
    } else {
      prevBtn.disabled = true;
    }
  }

  if (store.view === "winnersPage") {
    if (store.winnersPage * WINNERS_CARS_PER_PAGE < store.winnersCount) {
      nextBtn.disabled = false;
    } else {
      nextBtn.disabled = true;
    }
    if (store.winnersPage > 1) {
      prevBtn.disabled = false;
    } else {
      prevBtn.disabled = true;
    }
  }
};
