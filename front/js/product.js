displayProductPage(getProductId());

const productQuantity = document.getElementById("quantity");
const productColor = document.getElementById("colors");

// On écoute le clic sur le bouton
document
  .getElementById("addToCart")
  .addEventListener("click", function (event) {
    // On supprime le comportement par défaut
    event.preventDefault();
    // On affiche un message d'erreur si la quantité saisie est négative ou nulle
    if (productQuantity.value <= 0) {
      alert("Veuillez saisir une quantité valide");
    }
    // On affiche un message d'erreur si aucune couleur n'a été sélectionnée
    else if (productColor.value === "") {
      alert("Veuillez choisir une couleur");
    }
    // On ajoute au panier l'id du produit, sa quantité et sa couleur
    else {
      let product = {
        id: getProductId(),
        quantity: productQuantity.value,
        color: productColor.value,
        price: document.getElementById("price").firstChild.data,
      };
      addToCart(product);
      // On affiche un message de confirmation pour l'utilisateur
      alert("Votre produit a bien été ajouté au panier");
    }
  });
