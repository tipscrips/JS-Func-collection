export function clearAllElementsIn(elem) {
  while (elem.firstChild) {
    elem.firstChild.remove();
  }
}

export function listCreatorFromPromptAsk() {
  let ul = document.createElement("ul");

  while (true) {
    let promptAnswer = prompt("Enter some text for list content", "New list");
    if (!promptAnswer) break;

    let li = document.createElement("li");
    li.textContent = promptAnswer;
    ul.append(li);
  }
  document.body.append(ul);
}

export function createTreeFromObject(container, obj) {
  if (isJson(obj)) {
    obj = JSON.parse(obj);
  }

  for (let [key, value] of Object.entries(obj)) {
    let li = document.createElement("li");
    li.textContent = key;
    if (Object.keys(value)[0]) {
      createTreeFromObject(li, value);
    }
    {
      let ul = document.createElement("ul");
      ul.append(li);
      container.append(ul);
    }
  }
}

export function isJson(someJson) {
  try {
    let obj = JSON.parse(someJson);
    return true;
  } catch {
    return false;
  }
}

export function addNumberOfChildren() {
  let lis = document.querySelectorAll("li");

  for (let li of lis) {
    let titleOfElement = li.firstChild.data.replace(/\s/g, "");
    let counterOfElementChild = li.querySelectorAll("li").length;
    if (li.firstElementChild) {
      li.firstChild.data = `${titleOfElement} [${counterOfElementChild}]`;
    }
  }
}
