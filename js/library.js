export function clearAllElementsIn(elem) {
  /* ваш код */
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
