import { clearAllElementsIn } from "./library.js";
import { listCreatorFromPromptAsk } from "./library.js";
import { createTreeFromObject } from "./library.js";
import { isJson } from "./library.js";

let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};

/*
let json = JSON.stringify(data);

let container = document.querySelector(".container");
createTreeFromObject(container, json);
*/
