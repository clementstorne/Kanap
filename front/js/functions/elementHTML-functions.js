// Fonction qui crée un nouvel élément dans le DOM et lui assigne un parent et une classe
function createElement(type, parent, classToAdd, content) {
  const element = document.createElement(type);
  parent.appendChild(element);
  if (classToAdd !== undefined) {
    element.classList.add(classToAdd);
  }
  if (content !== undefined) {
    element.innerText = `${content}`;
  }
  return element;
}

// Fonction qui ajoute une image dans le DOM
function createImage(urlImage, altImage, parent, classToAdd) {
  const image = createElement("img", parent, classToAdd);
  image.setAttribute("src", `${urlImage}`);
  image.setAttribute("alt", `${altImage}`);
  return image;
}

// Fonction qui ajoute un lien dans le DOM
function createLink(href, parent, classToAdd) {
  const link = createElement("a", parent, classToAdd);
  link.setAttribute("href", `${href}`);
  return link;
}

// Fonction qui ajoute un article dans le DOM
function createArticle(parent, classToAdd) {
  const article = createElement("article", parent, classToAdd);
  return article;
}

// Fonction qui ajoute un titre dans le DOM
function createTitle(level, content, parent, classToAdd) {
  const title = createElement(`h${level}`, parent, classToAdd, content);
  return title;
}

// Fonction qui ajoute un paragraphe dans le DOM
function createParagraph(content, parent, classToAdd) {
  const paragraph = createElement("p", parent, classToAdd, content);
  return paragraph;
}

// Fonction qui crée une nouvelle option
function createNewOption(value,parent) {
  const newOption = createElement("option", parent, undefined, value);
  newOption.setAttribute("value", `${value}`);
  return newOption;
}

// Fonction qui ajoute une div dans le DOM
function createDiv(parent, classToAdd) {
  const div = createElement("div", parent, classToAdd);
  return div;
}

// Fonction qui ajoute un input dans le DOM
function createNumberInput(name, min, max, value, parent, classToAdd) {
  const input = createElement("input", parent, classToAdd);
  input.setAttribute("type", "number");
  input.setAttribute("name", `${name}`);
  input.setAttribute("min", `${min}`);
  input.setAttribute("max", `${max}`);
  input.setAttribute("value", `${value}`);
  parent.appendChild(input);
  return input;
}
