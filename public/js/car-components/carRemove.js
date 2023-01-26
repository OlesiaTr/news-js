import store from '../store/store.js';
import storeUpdate from '../store/storeUpdate.js';
import { deleteCar } from '../api/apiGarage.js';
import { deleteWinner } from '../api/apiWinners.js';
import renderGarage from '../ui-render/renderGarage.js';
import renderWinners from '../ui-render/renderWinners.js';

const carRemove = async () => {
  const controls = document.querySelectorAll('.track__controls--car');
  const garageView = document.querySelector('#garage-view');
  const winnersView = document.querySelector('.winners');

  async function onRemoveClick(e) {
    if (store.selectedCarID !== null) return;
    if (!e.target.className.includes('car__remove')) return;

    store.selectedCarID = Number(e.target.id.split('remove-')[1]);

    if (store.winners.find((car) => car.id === store.selectedCarID)) {
      await deleteWinner(store.selectedCarID);
    }
    await deleteCar(store.selectedCarID);
    await storeUpdate();

    if (winnersView !== null) winnersView.innerHTML = renderWinners();
    garageView.innerHTML = renderGarage();

    store.selectedCarID = null;
  }

  controls.forEach((car) => car.addEventListener('click', onRemoveClick));
};

export default carRemove;
