import engineStartBtn from '../engine-components/engineStartBtn.js';
import engineStopBtn from '../engine-components/engineStopBtn.js';

const engineControlsListener = () => {
  document.getElementById('garage-list')?.addEventListener('click', async (e) => {
    if (e.target.classList.contains('engine__start-btn')) {
      const id = +e.target.id.split('start-engine-')[1];
      engineStartBtn(id);
    }

    if (e.target.classList.contains('engine__stop-btn')) {
      const id = +e.target.id.split('stop-engine-')[1];
      engineStopBtn(id);
    }
  });
};

export default engineControlsListener;
