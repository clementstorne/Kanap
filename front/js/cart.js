function sauvegarderPanier(panier) {
  localStorage.setItem("panier", JSON.stringify(panier));
}

function recupererPanier() {
  let panier = localStorage.getItem("panier");
  if (panier == null) {
    return [];
  } else {
    return JSON.parse(panier);
  }
}

function ligneProduit(id, quantiteProduit, couleurProduit) {
  fetch(`http://localhost:3000/api/products/${id}`)
    .then((reponse) => {
      return reponse.json();
    })
    .then((data) => {
      const nouvelleLigne = document.createElement("article");
      nouvelleLigne.classList.add("cart__item");
      nouvelleLigne.setAttribute("data-id", `${id}`);
      nouvelleLigne.setAttribute("data-color", `${couleurProduit}`);
      document.getElementById("cart__items").appendChild(nouvelleLigne);
      nouvelleLigne.innerHTML = `<div class="cart__item__img">
        <img src="${data.imageUrl}" alt="${data.altTxt}">
        </div>
        <div class="cart__item__content">
            <div class="cart__item__content__description">
            <h2>${data.name}</h2>
            <p>${couleurProduit}</p>
            <p>${data.price * quantiteProduit} €</p>
            </div>
            <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
                <p>Qté : </p>
                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${quantiteProduit}">
            </div>
            <div class="cart__item__content__settings__delete">
                <p class="deleteItem">Supprimer</p>
            </div>
            </div>
        </div>`;
    })
    .catch(function (erreur) {
      alert(erreur);
    });
}

function afficherPanier() {
  let panier = recupererPanier();
  for (let i = 0; i < panier.length; i++) {
    let idProduit = panier[i].id;
    let quantiteProduit = panier[i].quantite;
    let couleurProduit = panier[i].couleur;
    ligneProduit(idProduit, quantiteProduit, couleurProduit);
  }
}

afficherPanier();

function nombreArticles() {
  let panier = recupererPanier();
  let nbArticles = 0;
  for (let i = 0; i < panier.length; i++) {
    nbArticles += panier[i].quantite;
  }
  document.getElementById("totalQuantity").innerText = `${nbArticles}`;
}

nombreArticles();

function recupererPrix(id) {
  fetch(`http://localhost:3000/api/products/${id}`)
    .then((reponse) => {
      return reponse.json();
    })
    .then((data) => {
      //   return parseInt(data.price);
      console.log(data.price);
    })
    .catch(function (erreur) {
      alert(erreur);
    });
}

function afficherPrixTotal() {
  let panier = recupererPanier();
  let prixTotal = 0;
  for (let i = 0; i < panier.length; i++) {
    let idProduit = panier[i].id;
    let prixUnitaire = recupererPrix(idProduit);
    prixTotal += panier[i].quantite * prixUnitaire;
  }
  document.getElementById("totalPrice").innerText = `${prixTotal}`;
}

afficherPrixTotal();

function retirerDuPanier(produit) {
  let panier = recupererPanier();
  panier = panier.filter((p) => p.id !== produit.id);
  sauvegarderPanier(panier);
}

function changerQuantite(produit, quantite) {
  let panier = recupererPanier();
  let produitDejaDansPanier = panier.find((p) => p.id == produit.id);
  if (produitDejaDansPanier !== undefined) {
    produitDejaDansPanier.quantite += quantite;
    if (produitDejaDansPanier <= 0) {
      retirerDuPanier(produitDejaDansPanier);
    } else {
      sauvegarderPanier(panier);
    }
  }
}

function viderPanier() {
  let panier = recupererPanier();
  panier = [];
  sauvegarderPanier(panier);
}
