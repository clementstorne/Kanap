// Fonction qui crée un objet contact
function createContact() {
  const contact = {
    firstName: getFirstName(),
    lastName: getLastName(),
    address: getAddress(),
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
  // On effectue les vérifications
  testForm();
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
      // JSON.stringify convertit une valeur JavaScript en chaîne JSON
      body: JSON.stringify(order),
    })
      .then((response) => {
        // response.json() convertit l'objet Response en une chaîne JSON
        return response.json();
      })
      .then((data) => {
        emptyCart();
        window.location = `./confirmation.html?orderId=${data.orderId}`;
      })
      .catch(function (error) {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
      });
  }
});