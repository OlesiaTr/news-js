import store from '../store/store.js';
import storeUpdate from '../store/storeUpdate.js';
import renderWinners from '../ui-render/renderWinners.js';

// eslint-disable-next-line no-return-assign
const sortOrder = () => (store.sortOrder = store.sortOrder === 'asc' ? 'desc' : 'asc');

const sortListener = async () => {
  const byWins = document.querySelector('#sort-by-wins');
  const byTime = document.querySelector('#sort-by-time');
  const winners = document.querySelector('.winners');

  const handleClick = async (sorting) => {
    store.sortBy = sorting;
    sortOrder();
    await storeUpdate();
    winners.innerHTML = renderWinners();
    store.sortBy = null;
  };

  byWins.onclick = () => handleClick('wins');
  byTime.onclick = () => handleClick('time');
};

export default sortListener;
