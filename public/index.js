import { renderRoot } from "./js/ui-render/index.js";
import { storeUpdate } from "./js/store/index.js";

const initPage = async () => {
  await storeUpdate();
  await renderRoot();
};

initPage();
