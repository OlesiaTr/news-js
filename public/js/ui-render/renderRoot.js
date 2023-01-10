import { navListener } from "../eventListeners/navListener.js";
import { generatorListener } from "../eventListeners/generatorListener.js";
import { paginationListener } from "../eventListeners/paginationListener.js";
import { renderGarage } from "./renderGarage.js";
import { renderWinners } from "./renderWinners.js";
import { carCreate } from "../car-components/carCreate.js";
import { carUpdate } from "../car-components/carUpdate.js";
import { carRemove } from "../car-components/carRemove.js";
import { engineControlsListener } from "../eventListeners/engineControlsListener.js";
import { paginationBtnsDisabled } from "./../utils/paginationBtnsDisabled.js";

export const renderRoot = async () => {
  const render = `
    <header class="header">
        <nav class="nav">
            <button class="nav__btn btn" id="to-garage" type="button">To garage</button>
            <button class="nav__btn btn" id="to-winners" type="button">To winners</button>
        </nav>
        <h1 class="header__title">ASYNC RACE API</h1>
    </header>

    <section id="garage" class="garage">
        <div class="form__wrapper">
            <form action="" class="form" id="create">
                <input type="text" class="form__name" id="create-name" name="name">
                <input type="color" class="form__color" id="create-color" name="color" value=#ffffff>
                <button class="form__btn btn" type="submit">Create</button>
            </form>
            <form action="" class="form" id="update">
                <input type="text" class="form__name" id="update-name" name="name" disabled>
                <input type="color" class="form__color" id="update-color" name="color" value=#ffffff disabled>
                <button class="form__btn btn" type="submit" disabled>Update</button>
            </form>
        </div>

        <div class="controls">
            <button class="btn controls__race" id="race">Race</button>
            <button class="btn controls__reset" id="reset" disabled>Reset</button>
            <button class="btn controls__generator" id="generator">Generate cars</button>
        </div>

        <div id="garage-view" class="garage__view">
            ${renderGarage()}
        </div>
        <p class="message-winner" id="message-winner"></p>
    </section>

    <section class="winners is-hidden">
        ${renderWinners()}
    </section>

    <section class="pagination">
        <button class="btn pagination__prev" id="prev">PREV</button>
        <button class="btn pagination__next" id="next">NEXT</button>
    </section>`;

  const root = document.createElement("div");
  root.innerHTML = render;
  document.body.innerHTML = "";
  document.body.appendChild(root);

  navListener();
  generatorListener();
  paginationListener();

  paginationBtnsDisabled();

  carCreate();
  carUpdate();
  carRemove();
  engineControlsListener();
};
