import { store } from "../utils/store.js";
import { paginationBtnsDisabled } from "../paginationBtnsDisabled.js";

export const navListener = async () => {
  const garageBtn = document.querySelector("#to-garage");
  const winnersBtn = document.querySelector("#to-winners");

  const garageSection = document.querySelector(".garage");
  const winnersSection = document.querySelector(".winners");

  garageBtn?.addEventListener("click", async () => {
    winnersSection.classList.add("is-hidden");
    garageSection.classList.remove("is-hidden");
    store.view = "garagePage";
    paginationBtnsDisabled();
  });
  winnersBtn?.addEventListener("click", async () => {
    garageSection.classList.add("is-hidden");
    winnersSection.classList.remove("is-hidden");
    store.view = "winnersPage";
    paginationBtnsDisabled();
  });
};
