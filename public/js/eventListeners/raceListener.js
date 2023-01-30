import { getCar } from '../api/apiGarage.js';
import engineStartBtn from '../engine-components/engineStartBtn.js';
import engineStopBtn from '../engine-components/engineStopBtn.js';
import storeUpdate from '../store/storeUpdate.js';
import renderWinners from '../ui-render/renderWinners.js';
import { createWinner } from '../api/apiWinners.js';

const raceListener = async () => {
  const raceStartBtn = document.getElementById('race');
  const raceResetBtn = document.getElementById('reset');
  const winnersView = document.querySelector('.winners');
  const congratulationMsg = document.getElementById('message-winner');
  const garageList = document.querySelectorAll(
    '#garage-list .garage__view-item',
  );

  const winnerCars = [];

  raceStartBtn?.addEventListener('click', async () => {
    garageList.forEach(async (car) => {
      const id = +car.id.split('track-')[1];
      await engineStartBtn(id).then(async (res) => {
        if (!res.success) return;

        winnerCars.push(res);
        const winner = winnerCars[0];
        const winnerData = await getCar(winner.id);

        congratulationMsg.innerHTML = `${winnerData.name} came first in ${(
          winner.time / 1000
        ).toFixed(2)} seconds!`;
        congratulationMsg.classList.add('visible');
        window.addEventListener('click', () => congratulationMsg.classList.remove('visible'));

        await createWinner({
          id: winner.id,
          wins: 1,
          time: winner.time,
        });

        await storeUpdate();

        winnersView.innerHTML = renderWinners();
      });

      raceStartBtn.disabled = true;
      raceResetBtn.disabled = false;
    });
  });

  raceResetBtn?.addEventListener('click', async () => {
    garageList.forEach(async (car) => {
      const id = +car.id.split('track-')[1];
      await engineStopBtn(id);

      raceResetBtn.disabled = true;
      raceStartBtn.disabled = false;
    });
  });
};

export default raceListener;
