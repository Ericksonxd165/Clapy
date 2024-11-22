const d = document;

import toggler from "./js/mode_toggler.js";

d.addEventListener("DOMContentLoaded", e => {
  toggler("#light-mode", "#night-mode","body","header","");
});
