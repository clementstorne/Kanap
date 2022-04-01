function getProduct(id) {
  fetch(`http://localhost:3000/api/products/${id}`)
    .then((reponse) => {
      return reponse.json();
    })
    .then((data) => {
      const product = {
        id: data._id,
        name: data.name,
        description: data.description,
        urlImage: data.imageUrl,
        altText: data.altTxt,
        price: data.price,
      };
      // console.log(product);
      return product;
    })
    .catch(function (erreur) {
      alert(erreur);
    });
}
