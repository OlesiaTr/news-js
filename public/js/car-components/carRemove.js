import { store } from "../store/store.js";
import { storeUpdate } from "../store/storeUpdate.js";
import { deleteCar } from "./apiGarage.js";
import { deleteWinner } from "./apiWinners.js";
import { renderGarage } from "../ui-render/renderGarage.js";
import { renderWinners } from "../ui-render/renderWinners.js";

export const carRemove = async () => {
  const controls = document.querySelectorAll(".track__controls--car");
  const garageView = document.querySelector("#garage-view");
  const winnersView = document.querySelector("#winners-view");

  controls.forEach((car) =>
    car.addEventListener("click", async (e) => {
      if (store.selectedCarID !== null) return;
      if (!e.target.className.includes("car__remove")) return;

      store.selectedCarID = Number(e.target.id.split("remove-")[1]);

      await deleteCar(store.selectedCarID);
      if (store.winners.find((car) => car.id === store.selectedCarID))
        await deleteWinner(store.selectedCarID);
      await storeUpdate();

      garageView.innerHTML = renderGarage();
      if (winnersView !== null) winnersView.innerHTML = renderWinners();

      store.selectedCarID = null;
    })
  );
};
