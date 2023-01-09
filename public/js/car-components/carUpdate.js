import { getCar, updateCar } from "./apiGarage.js";
import { storeUpdate } from "../store/storeUpdate.js";
import { renderGarage } from "../ui-render/renderGarage.js";
import { renderWinners } from "../ui-render/renderWinners.js";
import { store } from "../store/store.js";

export const carUpdate = async () => {
  const updateForm = document.querySelector("#update");
  const garageView = document.querySelector("#garage-view");
  const winnersView = document.querySelector("#winners-view");
  const controls = document.querySelectorAll(".track__controls--car");

  controls.forEach((car) =>
    car.addEventListener("click", async (e) => {
      if (store.selectedCarID !== null) return;
      if (!e.target.className.includes("car__select")) return;

      store.selectedCarID = Number(e.target.id.split("select-")[1]);
      const { id, name, color } = await getCar(store.selectedCarID);

      updateForm[0].value = name;
      updateForm[1].value = color;

      updateForm[0].disabled = false;
      updateForm[1].disabled = false;
      updateForm[2].disabled = false;

      updateForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const newName = e.target[0].value;
        const newColor = e.target[1].value;

        await updateCar(id, { name: newName, color: newColor });
        await storeUpdate();

        garageView.innerHTML = renderGarage();
        if (store.winners.find((car) => car.id === store.selectedCarID))
          winnersView.innerHTML = renderWinners();
        updateForm.reset();

        updateForm[0].disabled = true;
        updateForm[1].disabled = true;
        updateForm[2].disabled = true;

        store.selectedCarID = null;
      });
    })
  );
};
