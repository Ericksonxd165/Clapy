const d = document;

import toggler from "./js/mode_toggler.js";
import preloader from "./js/preloader.js";

d.addEventListener("DOMContentLoaded", e => {
  console.log("hola")
  preloader("loader", "container");
});
