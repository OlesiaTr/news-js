import { renderRoot } from "./js/ui-render/index.js";
import { storeUpdate } from "./js/storeUpdate.js";

const initPage = async () => {
  await storeUpdate();
  await renderRoot();
};

initPage();
