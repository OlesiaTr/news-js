import { startEngine, switchEngine } from "./apiEngine.js";
import { getDistance } from "../utils/getDistance.js";
import { getAnimation } from "../utils/getAnimation.js";
import { store } from "../store/store.js";

const FLAG_WIDTH = 100;

export const engineStartBtn = async (id) => {
  const startBtn = document.getElementById(`start-engine-${id}`);
  const stopBtn = document.getElementById(`stop-engine-${id}`);
  const car = document.getElementById(`car-${id}`);
  const flag = document.getElementById(`flag-${id}`);
  const brokenEngineMsg = document.getElementById(
    `message-broke-down-engine-${id}`
  );
  const brokenCar = document.getElementById(`track-${id}`);

  startBtn.disabled = true;
  stopBtn.disabled = false;

  const { velocity, distance } = await startEngine(id);
  const time = Math.round(distance / velocity);
  const currentDistance = Math.floor(getDistance(car, flag) + FLAG_WIDTH);

  store.animation[id] = getAnimation(car, currentDistance, time);

  const { success } = await switchEngine(id).then((res) => {
    if (res.success === false) {
      window.cancelAnimationFrame(store.animation[id].id);
      brokenCar.style.backgroundColor = "#d403033d";
      brokenEngineMsg.style.display = "block";
      brokenEngineMsg.innerHTML = `${
        brokenCar.querySelector(".car-name")?.textContent
      } is out of race because the engine was broken down`;
    }

    return res;
  });
  return { success, id, time };
};
