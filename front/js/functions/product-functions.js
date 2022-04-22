// Fonction qui crée la carte d'un produit
function createProductCard(productId, urlImage, altImage, titre, description) {
  // Création du lien vers la page produit
  const productCard = createLink(
    `./product.html?id=${productId}`,
    document.getElementById("items")
  );
  // Création de la carte produit
  const article = createArticle(productCard);
  //  Ajout de l'image à la carte produit
  createImage(urlImage, altImage, article);
  // Ajout du nom à la carte produit
  const productName = createTitle(3, `${titre}`, article, "productName");
  // Ajout de la description à la carte produit
  const productDescription = createParagraph(
    `${description}`,
    article,
    "productName"
  );
}

function getProduct(id) {
  fetch(`http://localhost:3000/api/products/${id}`)
    .then((response) => {
      // response.json() convertit l'objet Response en une chaîne JSON
      return response.json();
    })
    .then((data) => {
      const product = {
        id: data._id,
        name: data.name,
        description: data.description,
        urlImage: data.imageUrl,
        altText: data.altTxt,
        price: data.price,
      };
      return product;
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });
}

// Fonction qui récupère l'ID du produit dans l'URL de la page
function getProductId() {
  return new URL(location.href).searchParams.get("id");
}

// Fonction qui affiche les éléments de la page produit
function displayProductPage(id) {
  let url = urlAPI + `/${id}`;
  fetch(url)
    .then((response) => {
      // response.json() convertit l'objet Response en une chaîne JSON
      return response.json();
    })
    .then((data) => {
      // Modifie le titre de la page
      document.title = `${data.name}`;
      // Ajoute l'image dans la div avec la classe .item__img
      createImage(
        data.imageUrl,
        data.altTxt,
        document.querySelector(".item__img")
      );
      // Ajoute le nom du produit dans le h1 #title
      document.getElementById("title").innerText = `${data.name}`;
      // Ajoute le prix du produit dans le span #price
      document.getElementById("price").innerText = `${data.price}`;
      // Ajoute le prix du produit dans le paragraphe #description
      document.getElementById("description").innerText = `${data.description}`;
      // Ajoute les différentes options de couleur possibles
      for (let i = 0; i < data.colors.length; i++) {
        createNewOption(`${data.colors[i]}`, document.getElementById("colors"));
      }
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });
}

// Fonction qui affiche un produit dans le panier
function displayProductInCart(id, productQuantity, productColor) {
  let url = urlAPI + `/${id}`;
  fetch(url)
    .then((response) => {
      // response.json() convertit l'objet Response en une chaîne JSON
      return response.json();
    })
    .then((data) => {
      // Ajoute un article dans la section #cart__item
      const itemsInCart = document.getElementById("cart__items");
      const product = createArticle(itemsInCart, "cart__item");
      product.setAttribute("data-id", `${id}`);
      product.setAttribute("data-color", `${productColor}`);
      // Ajoute la div .cart__item__img dans l'article
      const divImg = createDiv(product, "cart__item__img");
      //   Ajoute l'image du produit dans la div .cart__item__img
      createImage(data.imageUrl, data.altTxt, divImg);
      // Ajoute la div .cart__item__content dans l'article
      const divContent = createDiv(product, "cart__item__content");
      // Ajoute la div .cart__item__content__description dans la div .cart__item__content
      const divDescription = createDiv(
        divContent,
        "cart__item__content__description"
      );
      // Ajout du nom du produit
      createTitle(2, `${data.name}`, divDescription);
      // Ajout de la couleur du produit
      createParagraph(`${productColor}`, divDescription);
      // Ajout du prix total pour cette référence
      createParagraph(`${data.price * productQuantity} €`, divDescription);
      // Ajoute la div .cart__item__content__settings dans l'article
      const divSettings = createDiv(product, "cart__item__content__settings");
      // Ajoute la div .cart__item__content__settings__quantity dans la div .cart__item__content__settings
      const divQuantity = createDiv(
        divSettings,
        "cart__item__content__settings__quantity"
      );
      // Ajoute la gestion de la quantité dans la div .cart__item__content__settings__quantity
      createParagraph("Qté : ", divQuantity);
      const input = createNumberInput(
        "itemQuantity",
        1,
        100,
        productQuantity,
        divQuantity,
        "itemQuantity"
      );
      // Ajoute un paragraphe pour un éventuel message d'erreur
      const inputErrorMessage = createParagraph(
        "",
        divSettings,
        "errorMessage"
      );
      // On écoute le changement de quantité et on modifie dans le LS avec la fonction changeProductQuantity
      input.addEventListener("change", function (event) {
        // Si la valeur saisie n'est pas un nombre, on affiche un message d'erreur
        if (isAnInteger(input.value) === false) {
          input.style.border = "2px solid #e74c3c";
          inputErrorMessage.innerText = "La valeur saisie doit être un nombre";
        }
        // Si la valeur est inférieure à 1 ou supérieure à 100, on affiche un message d'erreur
        else if (isQuantityValid(input.value) === false) {
          input.style.border = "2px solid #e74c3c";
          inputErrorMessage.innerText =
            "La valeur saisie doit être comprise entre 1 et 100";
        }
        // Sinon, on efface le message d'erreur, on affiche une bordure verte et une icone de validation
        else {
          clearMessage(inputErrorMessage);
          changeProductQuantity(id, productColor, event.target.value);
        }
      });
      // Ajoute la div .cart__item__content__settings__delete dans la div .cart__item__content__settings
      const divDelete = createDiv(
        divSettings,
        "cart__item__content__settings__delete"
      );
      // Ajoute le bouton de suppression d'un article dans la div .cart__item__content__settings__delete
      const deleteButton = createParagraph(
        "Supprimer",
        divDelete,
        "deleteItem"
      );
      // On écoute le clic sur le bouton de suppression et on modifie dans le LS avec la fonction removeFromCart
      deleteButton.addEventListener("click", function () {
        removeFromCart(id, productColor);
      });
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });
}
