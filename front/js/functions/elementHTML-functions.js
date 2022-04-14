// Fonction qui ajoute une image dans le DOM
export function createImage(urlImage, altImage, parent, classToAdd) {
  const image = document.createElement("img");
  image.setAttribute("src", `${urlImage}`);
  image.setAttribute("alt", `${altImage}`);
  parent.appendChild(image);
  image.classList.add(classToAdd);
  return image;
}

// Fonction qui ajoute un lien dans le DOM
export function createLink(href, parent, classToAdd) {
  const link = document.createElement("a");
  link.setAttribute("href", `${href}`);
  parent.appendChild(link);
  link.classList.add(classToAdd);
  return link;
}

// Fonction qui ajoute un article dans le DOM
export function createArticle(parent, classToAdd) {
  const article = document.createElement("article");
  parent.appendChild(article);
  article.classList.add(classToAdd);
  return article;
}

// Fonction qui ajoute un titre dans le DOM
export function createTitle(level, content, parent, classToAdd) {
  const title = document.createElement(`h${level}`);
  title.innerText = `${content}`;
  parent.appendChild(title);
  title.classList.add(classToAdd);
  return title;
}

// Fonction qui ajoute un paragraphe dans le DOM
export function createParagraph(content, parent, classToAdd) {
  const paragraph = document.createElement("p");
  paragraph.innerText = `${content}`;
  parent.appendChild(paragraph);
  paragraph.classList.add(classToAdd);
  return paragraph;
}

// Fonction qui crée une nouvelle option
export function createNewOption(value,parent) {
  const newOption = document.createElement("option");
  newOption.setAttribute("value", `${value}`);
  newOption.innerText = `${value}`;
  parent.appendChild(newOption);
  return newOption;
}

// Fonction qui ajoute une div dans le DOM
export function createDiv(parent, classToAdd) {
  const div = document.createElement("div");
  parent.appendChild(div);
  div.classList.add(classToAdd);
  return div;
}

// Fonction qui ajoute un input dans le DOM
export function createNumberInput(name, min, max, value, parent, classToAdd) {
  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("name", `${name}`);
  input.setAttribute("min", `${min}`);
  input.setAttribute("max", `${max}`);
  input.setAttribute("value", `${value}`);
  parent.appendChild(input);
  input.classList.add(classToAdd);
  return input;
}
