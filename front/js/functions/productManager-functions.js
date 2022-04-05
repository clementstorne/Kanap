function createProductCard(productId, urlImage, altImage, titre, description) {
  // Création du lien vers la page produit
  const productCard = createLink(`./product.html?id=${productId}`);
  document.getElementById("items").appendChild(productCard);
  // Création de la carte produit
  const article = createArticle();
  productCard.appendChild(article);
  //  Ajout de l'image à la carte produit
  article.appendChild(createImage(urlImage, altImage));
  // Ajout du nom à la carte produit
  const productName = createTitle(3, `${titre}`);
  productName.classList.add("productName");
  article.appendChild(productName);
  // Ajout de la description à la carte produit
  const productDescription = createParagraph(`${description}`);
  productDescription.classList.add("productName");
  article.appendChild(productDescription);
}

const urlAPI = "http://localhost:3000/api/products";

// Fonction qui affiche l'ensemble des produits sur index.html
function displayProducts() {
  fetch(urlAPI)
    .then((reponse) => {
      return reponse.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        createProductCard(
          data[i]._id,
          data[i].imageUrl,
          data[i].altTxt,
          data[i].name,
          data[i].description
        );
      }
    })
    .catch(function (erreur) {
      alert(erreur);
    });
}

// Fonction qui récupère l'ID du produit dans l'URL de la page
function getProductId() {
  return new URL(location.href).searchParams.get("id");
}

// Fonction qui affiche les éléments de la page produit
function displayProductPage(id) {
  fetch(`http://localhost:3000/api/products/${id}`)
    .then((reponse) => {
      return reponse.json();
    })
    .then((data) => {
      // Ajoute l'image dans la div avec la classe .item__img
      document
        .querySelector(".item__img")
        .appendChild(createImage(data.imageUrl, data.altTxt));
      // Ajoute le nom du produit dans le h1 #title
      document.getElementById("title").innerText = `${data.name}`;
      // Ajoute le prix du produit dans le span #price
      document.getElementById("price").innerText = `${data.price}`;
      // Ajoute le prix du produit dans le paragraphe #description
      document.getElementById("description").innerText = `${data.description}`;
      // Ajoute les différentes options de couleur possibles
      for (let i = 0; i < data.colors.length; i++) {
        document
          .getElementById("colors")
          .appendChild(createNewOption(`${data.colors[i]}`));
      }
    })
    .catch(function (erreur) {
      alert(erreur);
    });
}

// Fonction qui affiche un produit dans le panier
function displayProductInCart(id, productQuantity, productColor, productPrice) {
  fetch(`http://localhost:3000/api/products/${id}`)
    .then((reponse) => {
      return reponse.json();
    })
    .then((data) => {
      // Ajoute un article dans la section #cart__item
      const product = createArticle();
      product.classList.add("cart__item");
      product.setAttribute("data-id", `${id}`);
      product.setAttribute("data-color", `${productColor}`);
      document.getElementById("cart__items").appendChild(product);
      // Ajoute la div .cart__item__img dans l'article
      const divImg = createDiv();
      divImg.classList.add("cart__item__img");
      product.appendChild(divImg);
      //   Ajoute l'image du produit dans la div .cart__item__img
      divImg.appendChild(createImage(data.imageUrl, data.altTxt));
      // Ajoute la div .cart__item__content dans l'article
      const divContent = createDiv();
      divContent.classList.add("cart__item__content");
      product.appendChild(divContent);
      // Ajoute la div .cart__item__content__description dans la div .cart__item__content
      const divDescription = createDiv();
      divDescription.classList.add("cart__item__content__description");
      divContent.appendChild(divDescription);
      // Ajout du nom du produit
      divDescription.appendChild(createTitle(2, `${data.name}`));
      // Ajout de la couleur du produit
      divDescription.appendChild(createParagraph(`${productColor}`));
      // Ajout du prix total pour cette référence
      divDescription.appendChild(
        createParagraph(`${productPrice * productQuantity} €`)
      );
      // Ajoute la div .cart__item__content__settings dans l'article
      const divSettings = createDiv();
      divSettings.classList.add("cart__item__content__settings");
      product.appendChild(divSettings);
      // Ajoute la div .cart__item__content__settings__quantity dans la div .cart__item__content__settings
      const divQuantity = createDiv();
      divQuantity.classList.add("cart__item__content__settings__quantity");
      divSettings.appendChild(divQuantity);
      // Ajoute la gestion de la quantité dans la div .cart__item__content__settings__quantity
      divQuantity.appendChild(createParagraph("Qté : "));
      const input = createNumberInput("itemQuantity", 1, 100, productQuantity);
      input.classList.add("itemQuantity");
      divQuantity.appendChild(input);
      // On écoute le changement de quantité et on modifie dans le LS avec la fonction changeProductQuantity
      input.addEventListener("change", function (event) {
        changeProductQuantity(id, productColor, event.target.value);
      });
      // Ajoute la div .cart__item__content__settings__delete dans la div .cart__item__content__settings
      const divDelete = createDiv();
      divDelete.classList.add("cart__item__content__settings__delete");
      divSettings.appendChild(divDelete);
      // Ajoute le bouton de suppression d'un article dans la div .cart__item__content__settings__delete
      const deleteButton = createParagraph("Supprimer");
      deleteButton.classList.add("deleteItem");
      divDelete.appendChild(deleteButton);
      // On écoute le clic sur le bouton de suppression et on modifie dans le LS avec la fonction removeFromCart
      deleteButton.addEventListener("click", function () {
        removeFromCart(id, productColor);
      });
    })
    .catch(function (erreur) {
      alert(erreur);
    });
}
