displayProductPage(getProductId());

const productQuantity = document.getElementById("quantity");
const productColor = document.getElementById("colors");

// On écoute le clic sur le bouton
document
  .getElementById("addToCart")
  .addEventListener("click", function (event) {
    // On effectue les vérifications
    colorChecker();
    quantityChecker();
    // S'il y a une erreur de saisie, on interrompt le processus
    if (
      isAnInteger(productQuantity.value) === false ||
      isQuantityValid(productQuantity.value) === false ||
      productColor.value === ""
    ) {
      event.preventDefault();
    } else {
      // On ajoute au panier l'id du produit, sa quantité et sa couleur
      let product = {
        id: getProductId(),
        quantity: productQuantity.value,
        color: productColor.value,
        price: document.getElementById("price").firstChild.data,
      };
      addToCart(product);
      // On affiche un message de confirmation pour l'utilisateur
      confirmationMessage();
    }
  });
