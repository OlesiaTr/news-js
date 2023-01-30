import renderCarSvg from './renderCarSvg.js';
import store from '../store/store.js';

const renderWinners = () => `
    <h2 class="winners__title">Winners: ${store.winnersCount} </h2>
    <h3 class="winners__page">Page № ${store.winnersPage} </h3>
    <table class="table" cellspacing="20" border="0" cellpadding="0">
        <thead>
            <th>Number</th>
            <th>Car</th>
            <th>Name</th>
            <th class="table__btn table__wins" id="sort-by-wins">Wins</th>
            <th class="table__btn table__time" id="sort-by-time">Best time (sec)</th>
        </thead>
        <tbody>
            ${store.winners
    .map(
      ({ car, wins, time }, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${renderCarSvg(car.color)}</td>
                    <td>${car.name}</td>
                    <td>${wins}</td>
                    <td>${(time / 1000).toFixed(2)}</td>
                </tr>
                `,
    )
    .join(' ')}
        </tbody>
    </table>`;

export default renderWinners;
