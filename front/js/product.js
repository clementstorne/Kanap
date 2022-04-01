const divImage = document.querySelector(".item__img");
const titreProduit = document.getElementById("title");
const prixProduit = document.getElementById("price");
const descriptionProduit = document.getElementById("description");

function getIdProduit() {
  return new URL(location.href).searchParams.get("id");
}

let idProduit = getIdProduit();

function afficherPageProduit(id) {
  fetch(`http://localhost:3000/api/products/${id}`)
    .then((reponse) => {
      return reponse.json();
    })
    .then((data) => {
      divImage.innerHTML = `<img src="${data.imageUrl}" alt="${data.altTxt}">`;
      titreProduit.innerText = `${data.name}`;
      prixProduit.innerText = `${data.price}`;
      descriptionProduit.innerText = `${data.description}`;
      for (let i = 0; i < data.colors.length; i++) {
        const nouvelleCouleur = document.createElement("option");
        nouvelleCouleur.setAttribute("value", `${data.colors[i]}`);
        nouvelleCouleur.innerText = `${data.colors[i]}`;
        document.getElementById("colors").appendChild(nouvelleCouleur);
      }
    })
    .catch(function (erreur) {
      alert(erreur);
    });
}

afficherPageProduit(idProduit);

const couleurProduit = document.getElementById("colors");
const quantiteProduit = document.getElementById("quantity");
const ajoutPanier = document.getElementById("addToCart");

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

function ajouterAuPanier(produit) {
  let panier = recupererPanier();
  let produitDejaDansPanier = panier.find(
    (p) => p.id === produit.id && p.couleur === produit.couleur
  );
  if (produitDejaDansPanier !== undefined) {
    produitDejaDansPanier.quantite += parseInt(quantiteProduit.value);
  } else {
    produit.quantite = 1;
    panier.push(produit);
  }
  sauvegarderPanier(panier);
}

ajoutPanier.addEventListener("click", function (event) {
  event.preventDefault();
  if (quantiteProduit.value <= 0) {
    alert("Veuillez saisir une quantité valide");
  } else if (couleurProduit.value === "") {
    alert("Veuillez choisir une couleur");
  } else {
    let produit = {
      id: idProduit,
      quantite: quantiteProduit.value,
      couleur: couleurProduit.value,
    };
    ajouterAuPanier(produit);
    alert("Votre produit a bien été ajouté au panier");
  }
});
