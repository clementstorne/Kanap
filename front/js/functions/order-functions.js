// Fonction qui récupère le prénom
function getFirstName() {
  return document.getElementById("firstName").value;
}

// Fonction qui teste si le prénom/nom est valide
function isTextValid(str) {
  let regex =
    /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/;
  return regex.test(str);
}

// Fonction qui affiche un message d'erreur si le prénom est invalide
function firstNameChecker(str) {
  if (isTextValid(str)) {
    document.getElementById("firstNameErrorMsg").innerText = "";
  } else {
    document.getElementById("firstNameErrorMsg").innerText =
      "Ce prénom n'est pas valide";
    document.getElementById("firstNameErrorMsg").style.color = "#fbbcbc";
  }
}

document
  .getElementById("firstName")
  .addEventListener("change", function (event) {
    firstNameChecker(event.target.value);
  });

// Fonction qui récupère le nom
function getLastName() {
  return document.getElementById("lastName").value;
}

// Fonction qui affiche un message d'erreur si le nom est invalide
function lastNameChecker(str) {
  if (isTextValid(str)) {
    document.getElementById("lastNameErrorMsg").innerText = "";
  } else {
    document.getElementById("lastNameErrorMsg").innerText =
      "Ce nom n'est pas valide";
    document.getElementById("lastNameErrorMsg").style.color = "#fbbcbc";
  }
}

document
  .getElementById("lastName")
  .addEventListener("change", function (event) {
    lastNameChecker(event.target.value);
  });

// Fonction qui récupère l'adresse
function getAdress() {
  return document.getElementById("address").value;
}

// Fonction qui teste si l'adresse est valide
function isAdressValid(str) {
  let regex = /[^\.\"\?\!\;\:\#\$\%\&\(\)\*\+\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/;
  return regex.test(str);
}

// Fonction qui affiche un message d'erreur si l'adresse est invalide
function adressChecker(str) {
  if (isAdressValid(str)) {
    document.getElementById("addressErrorMsg").innerText = "";
  } else {
    document.getElementById("addressErrorMsg").innerText =
      "Cette adresse n'est pas valide";
    document.getElementById("addressErrorMsg").style.color = "#fbbcbc";
  }
}

document.getElementById("address").addEventListener("change", function (event) {
  adressChecker(event.target.value);
});

// Fonction qui récupère la ville
function getCity() {
  return document.getElementById("city").value;
}

// Fonction qui affiche un message d'erreur si la ville est invalide
function cityChecker(str) {
  if (isTextValid(str)) {
    document.getElementById("cityErrorMsg").innerText = "";
  } else {
    document.getElementById("cityErrorMsg").innerText =
      "Cette ville n'est pas valide";
    document.getElementById("cityErrorMsg").style.color = "#fbbcbc";
  }
}

document.getElementById("city").addEventListener("change", function (event) {
  cityChecker(event.target.value);
});

// Fonction qui récupère l'email
function getEmail() {
  return document.getElementById("email").value;
}

// Fonction qui teste si l'email est valide
function isEmailValid(str) {
  let regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  return regex.test(str);
}

// Fonction qui affiche un message d'erreur si l'email est invalide
function emailChecker(str) {
  if (isEmailValid(str)) {
    document.getElementById("emailErrorMsg").innerText = "";
  } else {
    document.getElementById("emailErrorMsg").innerText =
      "Cette adresse email n'est pas valide";
    document.getElementById("emailErrorMsg").style.color = "#fbbcbc";
  }
}

document.getElementById("email").addEventListener("change", function (event) {
  emailChecker(event.target.value);
});

// Fonction qui vérifie l'ensemble du formulaire
function formChecker() {
  if (
    isTextValid(getFirstName()) &&
    isTextValid(getLastName()) &&
    isAdressValid(getAdress()) &&
    isTextValid(getCity()) &&
    isEmailValid(getEmail())
  ) {
    return true;
  } else {
    return false;
  }
}

// Fonction qui crée un objet contact
function createContact() {
  const contact = {
    firstName: getFirstName(),
    lastName: getLastName(),
    address: getAdress(),
    city: getCity(),
    email: getEmail(),
  };
  return contact;
}

// Fonction qui crée le tableau avec les id des produits
function createProductsArray() {
  // Récupère le panier
  let cart = getCart();
  // On initialise le tableau
  let products = [];
  // Pour chaque article dans le panier, on ajoute son id au tableau
  for (let i = 0; i < cart.length; i++) {
    products.push(cart[i].id);
  }
  return products;
}

document.getElementById("order").addEventListener("click", function (event) {
  // On supprime le comportement par défaut
  event.preventDefault();
  // On vérifie l'ensemble du formulaire
  if (formChecker()) {
    // On crée l'objet contact
    let contact = createContact();
    // On crée le tableau products
    let products = createProductsArray();
    // On crée l'objet order qui sera envoyé à l'API
    let order = { contact, products };
    // On envoie les données à l'API
    let url = urlAPI + "/order";
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((reponse) => {
        return reponse.json();
      })
      .then((data) => {
        emptyCart();
        window.location = `./confirmation.html?orderId=${data.orderId}`;
      })
      .catch(function (erreur) {
        alert(erreur);
      });
  }
});
