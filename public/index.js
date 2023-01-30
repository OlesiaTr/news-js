import storeUpdate from './js/store/storeUpdate.js';
import renderRoot from './js/ui-render/renderRoot.js';

const initPage = async () => {
  await storeUpdate();
  await renderRoot();
};

initPage();
