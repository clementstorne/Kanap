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
  const productColor = document.getElementById("colors");
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

// Fonction qui récupère le prénom
function getFirstName() {
    return document.getElementById("firstName").value;
  }
  
  // Fonction qui teste si le prénom/nom est valide
  function isTextValid(str) {
    let regex =
      /^[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\/\<\>\=\@\[\]\\\^\_\{\}\|\~]{2,}$/;
    return regex.test(str);
  }
  
// Fonction qui vérifie la cohérence du prénom
function firstNameChecker() {
    const firstName = document.getElementById("firstName");
    const errorMessage = document.getElementById('firstNameErrorMsg');
    const errorIcon = document.getElementById('firstNameIcon');
    // Si la saisie est incorrecte, on affiche une bordure rouge, un message et une icone d'erreur
    if (isTextValid(firstName.value.trim()) === false) {
        firstName.style.border = '2px solid #e74c3c';
      errorMessage.innerText = 'Le prénom ne peut contenir ni chiffres, ni caractères spéciaux et avoir une longueur minimale de 2 caractères';
      invalidIcon(errorIcon);
    }
    // Sinon, on efface le message d'erreur, on affiche une bordure verte et une icone de validation
    else {
        firstName.style.border = '2px solid #2ecc71';
      clearMessage(errorMessage);
      validIcon(errorIcon);
    }
  }
  
  // Fonction qui récupère le nom
  function getLastName() {
    return document.getElementById("lastName").value;
  }

  // Fonction qui vérifie la cohérence du nom
function lastNameChecker() {
    const lastName = document.getElementById("lastName");
    const errorMessage = document.getElementById('lastNameErrorMsg');
    const errorIcon = document.getElementById('lastNameIcon');
    // Si la saisie est incorrecte, on affiche une bordure rouge, un message et une icone d'erreur
    if (isTextValid(lastName.value.trim()) === false) {
        lastName.style.border = '2px solid #e74c3c';
      errorMessage.innerText = 'Le nom ne peut contenir ni chiffres, ni caractères spéciaux  et avoir une longueur minimale de 2 caractères';
      invalidIcon(errorIcon);
    }
    // Sinon, on efface le message d'erreur, on affiche une bordure verte et une icone de validation
    else {
        lastName.style.border = '2px solid #2ecc71';
      clearMessage(errorMessage);
      validIcon(errorIcon);
    }
  }
  
  // Fonction qui récupère l'adresse
  function getAddress() {
    return document.getElementById("address").value;
  }
  
  // Fonction qui teste si l'adresse est valide
  function isAddressValid(str) {
    let regex = /[^\.\"\?\!\;\:\#\$\%\&\(\)\*\+\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/;
    return regex.test(str);
  }
  
  // Fonction qui vérifie la cohérence du nom
function addressChecker() {
    const address = document.getElementById("address");
    const errorMessage = document.getElementById('addressErrorMsg');
    const errorIcon = document.getElementById('addressIcon');
    // Si la saisie est incorrecte, on affiche une bordure rouge, un message et une icone d'erreur
    if (isAddressValid(address.value.trim()) === false) {
      address.style.border = '2px solid #e74c3c';
      errorMessage.innerText = "L'adresse ne peut contenir aucun caractère spécial";
      invalidIcon(errorIcon);
    }
    // Sinon, on efface le message d'erreur, on affiche une bordure verte et une icone de validation
    else {
        address.style.border = '2px solid #2ecc71';
      clearMessage(errorMessage);
      validIcon(errorIcon);
    }
  }
  
  // Fonction qui récupère la ville
  function getCity() {
    return document.getElementById("city").value;
  }
  
// Fonction qui vérifie la cohérence de la ville
function cityChecker() {
    const city = document.getElementById("city");
    const errorMessage = document.getElementById('cityErrorMsg');
    const errorIcon = document.getElementById('cityIcon');
    // Si la saisie est incorrecte, on affiche une bordure rouge, un message et une icone d'erreur
    if (isTextValid(city.value.trim()) === false) {
        city.style.border = '2px solid #e74c3c';
      errorMessage.innerText = 'La ville ne peut contenir ni chiffres, ni caractères spéciaux  et avoir une longueur minimale de 2 caractères';
      invalidIcon(errorIcon);
    }
    // Sinon, on efface le message d'erreur, on affiche une bordure verte et une icone de validation
    else {
        city.style.border = '2px solid #2ecc71';
      clearMessage(errorMessage);
      validIcon(errorIcon);
    }
  }
  
  // Fonction qui récupère l'email
  function getEmail() {
    return document.getElementById("email").value;
  }
  
  // Fonction qui teste si l'email est valide
  function isEmailValid(str) {
    let regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return regex.test(str);
  }
  
// Fonction qui vérifie la cohérence de l'email
function emailChecker() {
    const email = document.getElementById("email");
    const errorMessage = document.getElementById('emailErrorMsg');
    const errorIcon = document.getElementById('emailIcon');
    // Si la saisie est incorrecte, on affiche une bordure rouge, un message et une icone d'erreur
    if (isEmailValid(email.value.trim()) === false) {
      email.style.border = '2px solid #e74c3c';
      errorMessage.innerText = "L'email est incorrect";
      invalidIcon(errorIcon);
    }
    // Sinon, on efface le message d'erreur, on affiche une bordure verte et une icone de validation
    else {
        email.style.border = '2px solid #2ecc71';
      clearMessage(errorMessage);
      validIcon(errorIcon);
    }
  }
  
  // Fonction qui vérifie l'ensemble du formulaire
  function formChecker() {
    if (
      isTextValid(getFirstName()) &&
      isTextValid(getLastName()) &&
      isAddressValid(getAddress()) &&
      isTextValid(getCity()) &&
      isEmailValid(getEmail())
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Fonction qui affiche les résultats des tests du formulaire
  function testForm() {
    firstNameChecker();
    lastNameChecker();
    addressChecker();
    cityChecker();
    emailChecker();
  }