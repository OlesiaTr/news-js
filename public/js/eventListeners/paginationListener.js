import { store } from "../utils/store.js";
import { storeUpdate } from "../utils/storeUpdate.js";
import { paginationBtnsDisabled } from "../paginationBtnsDisabled.js";
import { renderGarage } from "../ui-render/renderGarage.js";
import { renderWinners } from "../ui-render/renderWinners.js";

export const paginationListener = async () => {
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const garageSection = document.getElementById("garage-view");
  const winnersSection = document.querySelector(".winners");

  prevBtn?.addEventListener("click", async () => {
    switch (store.view) {
      case "garagePage": {
        store.carsPage -= 1;
        await storeUpdate();
        garageSection.innerHTML = renderGarage();
        break;
      }
      case "winnersPage": {
        store.winnersPage -= 1;
        await storeUpdate();
        winnersSection.innerHTML = renderWinners();
        break;
      }
      default:
        throw new Error("Smth went wrong😖");
    }
    paginationBtnsDisabled();
  });

  nextBtn?.addEventListener("click", async () => {
    switch (store.view) {
      case "garagePage": {
        store.carsPage += 1;
        await storeUpdate();
        garageSection.innerHTML = renderGarage();
        break;
      }
      case "winnersPage": {
        store.winnersPage += 1;
        await storeUpdate();
        winnersSection.innerHTML = renderWinners();
        break;
      }
      default:
        throw new Error("Smth went wrong😖");
    }
    paginationBtnsDisabled();
  });
};
