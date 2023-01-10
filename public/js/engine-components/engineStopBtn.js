import { stopEngine } from "../api/apiEngine.js";
import { store } from "../store/store.js";

export const engineStopBtn = async (id) => {
  const startBtn = document.getElementById(`start-engine-${id}`);
  const stopBtn = document.getElementById(`stop-engine-${id}`);
  const brokenEngineMsg = document.getElementById(
    `message-broke-down-engine-${id}`
  );
  const brokenCar = document.getElementById(`track-${id}`);

  stopBtn.disabled = true;
  startBtn.disabled = false;

  await stopEngine(id);

  brokenCar.style.backgroundColor = "transparent";
  brokenEngineMsg.style.display = "none";

  const car = document.getElementById(`car-${id}`);
  car.style.transform = "translateX(0)";
  if (store.animation[id] !== undefined)
    window.cancelAnimationFrame(store.animation[id].id);
};
