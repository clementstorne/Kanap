function afficherProduits() {
  fetch(`http://localhost:3000/api/products`)
    .then((reponse) => {
      return reponse.json();
      // Récupération de la promise
    })
    .then((data) => {
      //  Tableau d'objets
      for (let i = 0; i < data.length; i++) {
        creerCarteProduit(
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

afficherProduits();

function creerCarteProduit(idProduit, urlImage, altImage, titre, description) {
  const nouvelleCarte = document.createElement("a");
  nouvelleCarte.setAttribute("href", `./product.html?id=${idProduit}`);
  nouvelleCarte.innerHTML = `<article>
  <img src="${urlImage}" alt="${altImage}">
  <h3 class="productName">${titre}</h3>
  <p class="productDescription">${description}</p>
  </article>`;
  document.getElementById("items").appendChild(nouvelleCarte);
}

