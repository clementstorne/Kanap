
import * as productManager from "/clement/ClementStorne_5_25032022/front/js/functions/productManager-functions.js";
import * as formValidation from "/clement/ClementStorne_5_25032022/front/js/functions/formValidation-functions.js";

let idProduct = productManager.getProductId();

productManager.displayProductPage(idProduct);

let productQuantity = document.getElementById("quantity");
let productColor = document.getElementById("colors");

// On écoute le clic sur le bouton
document
  .getElementById("addToCart")
  .addEventListener("click", function (event) {
      
    formValidation.validate(productQuantity, productColor, idProduct);
  });