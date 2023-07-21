import {
  clearAllElementsIn,
  listCreatorFromPromptAsk,
  createTreeFromObject,
  isJson,
  addNumberOfChildren,
} from "./library.js";

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

let container = document.querySelector(".container");
createTreeFromObject(container, data);
addNumberOfChildren();
/*
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

let json = JSON.stringify(data);

let container = document.querySelector(".container");
createTreeFromObject(container, json);
*/
