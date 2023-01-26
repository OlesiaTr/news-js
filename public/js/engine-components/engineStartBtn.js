import { startEngine, switchEngine } from '../api/apiEngine.js';
import getDistance from '../utils/getDistance.js';
import getAnimation from '../utils/getAnimation.js';
import store from '../store/store.js';

const FLAG_EXTRA_DISTANCE = 8;

const engineStartBtn = async (id) => {
  const startBtn = document.getElementById(`start-engine-${id}`);
  const stopBtn = document.getElementById(`stop-engine-${id}`);
  const car = document.querySelector(`#car-${id} .car__svg`);
  const flag = document.getElementById(`flag-${id}`);
  const brokenEngineMsg = document.getElementById(
    `message-broke-down-engine-${id}`,
  );
  const brokenCar = document.getElementById(`track-${id}`);

  startBtn.disabled = true;
  stopBtn.disabled = false;

  const { distance, velocity } = await startEngine(id);
  const time = Math.round(distance / velocity);
  const currentDistance = Math.floor(
    getDistance(car, flag) + FLAG_EXTRA_DISTANCE,
  );

  store.animation[id] = getAnimation(car, currentDistance, time);

  const { success } = await switchEngine(id).then((res) => {
    if (!res.success) {
      window.cancelAnimationFrame(store.animation[id].id);
      brokenCar.style.backgroundColor = '#d403033d';
      brokenEngineMsg.style.display = 'block';
      brokenEngineMsg.innerHTML = `${
        brokenCar.querySelector('.track__controls--name')?.textContent
      } is out of race because the engine was broken down`;
    }

    return res;
  });

  return { success, id, time };
};

export default engineStartBtn;
