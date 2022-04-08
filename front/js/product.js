displayProductPage(getProductId());

const productQuantity = document.getElementById("quantity");
const productColor = document.getElementById("colors");

// Fonction qui teste si un nombre est compris entre 1 et 100
function isAnInteger(str) {
  let regex = /[0-9]+/;
  return regex.test(str);
}

// Fonction qui teste si un nombre est compris entre 1 et 100
function isQuantityValid(str) {
  let regex = /^[1-9]$|^[1-9][0-9]$|^(100)$/;
  return regex.test(str);
}

// Fonction qui efface les messages d'erreur
function clearMessage(message) {
  message.innerText = '';
}

// Fonction qui affiche l'icone d'erreur
function invalidIcon(icon) {
  icon.classList.add('fa-times-circle');
  icon.style.color = '#e74c3c';
}

// Fonction qui affiche l'icone OK
function validIcon(icon) {
  icon.classList.add('fa-check-circle');
  icon.style.color = '#2ecc71';
}

// Fonction qui vérifie si une couleur a été choisie
function colorChecker() {
  const errorMessage = document.getElementById('colorErrorMsg');
  const errorIcon = document.getElementById('colorIcon');
  // Si aucune valeur n'a été sélectionnée, on affiche une bordure rouge, un message et une icone d'erreur
  if (productColor.value === "") {
    productColor.style.border = '2px solid #e74c3c';
    errorMessage.innerText = 'Veuillez choisir une couleur';
    invalidIcon(errorIcon);
  }
  // Sinon, on efface le message d'erreur, on affiche une bordure verte et une icone de validation
  else {
    productColor.style.border = '2px solid #2ecc71';
    clearMessage(errorMessage);
    validIcon(errorIcon);
  }
}

// Fonction qui vérifie la cohérence de la quantité
function quantityChecker() {
  const errorMessage = document.getElementById('quantityErrorMsg');
  const errorIcon = document.getElementById('quantityIcon');
  // Si la valeur saisie n'est pas un nombre, on affiche un message d'erreur
  if (isAnInteger(productQuantity.value) === false) {
    productQuantity.style.border = '2px solid #e74c3c';
    errorMessage.innerText = 'La valeur saisie doit être un nombre';
    invalidIcon(errorIcon);
  }
  // Si la valeur est inférieure à 1 ou supérieure à 100, on affiche un message d'erreur
  else if (isQuantityValid(productQuantity.value) === false) {
    productQuantity.style.border = '2px solid #e74c3c';
    errorMessage.innerText = 'La valeur saisie doit être comprise entre 1 et 100';
    invalidIcon(errorIcon);
  } 
  // Sinon, on efface le message d'erreur, on affiche une bordure verte et une icone de validation
  else {
    productQuantity.style.border = '2px solid #2ecc71';
    clearMessage(errorMessage);
    validIcon(errorIcon);
  }
}

// Fonction qui affiche un message de confirmation
function confirmationMessage() {
  let message = document.getElementById('confirmationMessage');
  message.style.color = '#2B3E4F';
  message.style.textAlign = 'center';
  message.style.fontWeight = 'bold';
  message.style.fontSize = '110%';
  message.innerText = 'Le produit a bien été ajouté au panier';
}

// On écoute le clic sur le bouton
document
  .getElementById("addToCart")
  .addEventListener("click", function (event) {
    // On effectue les vérifications
    colorChecker();
    quantityChecker();
    // S'il y a une erreur de saisie, on interrompt le processus
    if (isAnInteger(productQuantity.value) === false || isQuantityValid(productQuantity.value) === false || productColor.value === "") {
      event.preventDefault();
    }
    else {
      // On ajoute au panier l'id du produit, sa quantité et sa couleur
      let product = {
        id: getProductId(),
        quantity: productQuantity.value,
        color: productColor.value,
        price: document.getElementById("price").firstChild.data,
      };
      addToCart(product);
      // On affiche un message de confirmation pour l'utilisateur
      document.getElementById('confirmationMessage').innerText = 'Le produit a bien été ajouté au panier';
    }
  });
