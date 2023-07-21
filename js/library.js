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
}

export function isJson(someJson) {
  try {
    let obj = JSON.parse(someJson);
    return true;
  } catch {
    return false;
  }
}
