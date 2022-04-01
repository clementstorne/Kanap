// Fonction qui ajoute une image dans le DOM
function createImage(urlImage, altImage) {
  const image = document.createElement("img");
  image.setAttribute("src", `${urlImage}`);
  image.setAttribute("alt", `${altImage}`);
  return image;
}

// Fonction qui ajoute un lien dans le DOM
function createLink(href) {
  const link = document.createElement("a");
  link.setAttribute("href", `${href}`);
  return link;
}

// Fonction qui ajoute un article dans le DOM
function createArticle() {
  const article = document.createElement("article");
  return article;
}

// Fonction qui ajoute un titre dans le DOM
function createTitle(level, content) {
  const title = document.createElement(`h${level}`);
  title.innerText = `${content}`;
  return title;
}

// Fonction qui ajoute un paragraphe dans le DOM
function createParagraph(content) {
  const paragraph = document.createElement("p");
  paragraph.innerText = `${content}`;
  return paragraph;
}

// Fonction qui crée une nouvelle option
function createNewOption(value) {
  const newOption = document.createElement("option");
  newOption.setAttribute("value", `${value}`);
  newOption.innerText = `${value}`;
  return newOption;
}

// Fonction qui ajoute une div dans le DOM
function createDiv() {
  const div = document.createElement("div");
  return div;
}

// Fonction qui ajoute un input dans le DOM
function createNumberInput(name, min, max, value) {
  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("name", `${name}`);
  input.setAttribute("min", `${min}`);
  input.setAttribute("max", `${max}`);
  input.setAttribute("value", `${value}`);
  return input;
}
