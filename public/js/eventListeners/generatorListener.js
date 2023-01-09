import { getRandomCars } from "../getRandomCars.js";
import { createCar } from "./apiGarage.js";
import { storeUpdate } from "../utils/storeUpdate.js";
import { renderGarage } from "../ui-render/renderGarage.js";

export const generatorListener = async () => {
  const generator = document.querySelector("#generator");
  const garageView = document.getElementById("garage-view");

  generator?.addEventListener("click", async () => {
    generator.disabled = true;
    const randomCars = getRandomCars();

    await Promise.all(randomCars.map(async (car) => createCar(car)));
    await storeUpdate();

    garageView.innerHTML = renderGarage();
    generator.disabled = false;
  });
};
