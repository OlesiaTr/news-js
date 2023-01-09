import { renderCarSvg } from "./renderCarSvg.js";

export const renderTrack = ({ id, name, color }) => `
    <div class="track">
        <div class="track__controls">
            <div class="track__controls--car">
                <button class="car__select btn" id='select-${id}'>Select</button>
                <button class="car__remove btn" id='remove-${id}'>Remove</button>
            </div>
            <div class="track__controls--engine">
                <button class="engine__start-btn btn" id="start-engine-${id}">Start</button>
                <button class="engine__stop-btn btn" id="stop-engine-${id}" disabled>Stop</button>
            </div>
            <span class="track__controls--name">${name}</span>
        </div>
        <div class="track__layout">
                <div class="car" id="car-${id}">
                    ${renderCarSvg(color)}
                                <div class="flag" id="flag-${id}">&#127937;</div>
                </div>
        </div>

        <div id="message-broke-down-engine-${id}" class="message" display="none"></div>
    </div>
`;
