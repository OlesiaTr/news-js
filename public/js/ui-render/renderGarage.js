import renderTrack from './renderTrack.js';
import store from '../store/store.js';

const renderGarage = () => `
<h2 class="garage__view-title">Garage: ${store.carsCount}</h2>
<h3 class="garage__view-page">Page № ${store.carsPage}</h3>
<ul class="garage__view-list" id="garage-list">
  ${store.cars
    .map(
      (car) => `<li id="track-${car.id}" class="garage__view-item">${renderTrack(
        car,
      )}</li>`,
    )
    .join('')}
</ul>
`;

export default renderGarage;
