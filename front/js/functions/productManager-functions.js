const urlAPI = "http://localhost:3000/api/products";

// Fonction qui affiche l'ensemble des produits sur index.html
function displayProducts() {
  fetch(urlAPI)
    .then((response) => {
      // response.json() convertit l'objet Response en une chaîne JSON
      return response.json();
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
    .catch(function (error) {
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
}