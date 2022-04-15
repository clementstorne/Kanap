const urlAPI = "http://localhost:3000/api/products";

// Fonction qui affiche l'ensemble des produits sur index.html
function displayProducts() {
  fetch(urlAPI)
    .then((reponse) => {
      return reponse.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        createProductCard(
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