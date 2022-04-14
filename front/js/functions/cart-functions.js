import * as productManager from  "/clement/ClementStorne_5_25032022/front/js/functions/productManager-functions.js";



// // Fonction qui enregistre le panier dans le localStorage
// JSON.stringify convertit une valeur JavaScript en chaîne JSON
export function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Fonction qui récupère le panier dans le localStorage
export function getCart() {
    
  let cart = localStorage.getItem("cart");
  // Si le panier n'existe pas, renvoyer un tableau vide
  if (cart === null) {
    return [];
  }
  // Si le panier existe, le renvoyer
  // JSON.parse convertit une chaîne JSON en valeur JavaScript
  else {
    return JSON.parse(cart);
  }
}

// Fonction qui vide le panier
export function emptyCart() {
  let cart = getCart();
  cart = [];
  saveCart(cart);
}

// Fonction qui ajoute un article au panier
export function addToCart( product,productQuantity) {
  // Récupère le panier
  let cart = getCart();
  // Vérifie si le produit n'est pas déjà dans le panier (même id et même couleur)
  let productAlreadyInCart = cart.find(
    (p) => p.id === product.id && p.color === product.color
  );
  // Si le produit est déjà dans le panier, on ajoute la nouvelle quantité à la quantité déjà dans le panier
  if (productAlreadyInCart !== undefined) {
    productAlreadyInCart.quantity += parseInt(productQuantity.value);
  }
  // Si le produit n'est pas dans le panier, on l'ajoute avec quantité sélectionnée
  else {
    product.quantity = parseInt(productQuantity.value);
    cart.push(product);
    
  }
  // Sauvegarde le panier
  saveCart(cart);
}

// Fonction qui affiche le contenu du panier
export function displayCart() {
  // Récupère le panier
  let cart = getCart();
  
  // Pour chaque article dans le panier, on affiche ses informations
  for (let i = 0; i < cart.length; i++) {
    let productId = cart[i].id;
    let productQuantity = cart[i].quantity;
    let productColor = cart[i].color;
    productManager.displayProductInCart(
      productId,
      productQuantity,
      productColor
    );
  }
}

// Fonction qui retire un article du panier
export function removeFromCart(productId, productColor) {
  // Récupère le panier
  let cart = getCart();
  // Garder tous les articles dont le couple id/color est différent de celui saisi
  cart = cart.filter((p) => !(p.id === productId && p.color === productColor));
  // Sauvegarde le panier
  saveCart(cart);
  // Actualise la page
  document.location.reload();
}

// Fonction qui change la quantité d'un produit
export function changeProductQuantity(productId, productColor, quantity) {
  // Récupère le panier
  let cart = getCart();
  // Retrouve le produit dans le panier
  let productAlreadyInCart = cart.find(
    (p) => p.id === productId && p.color === productColor
  );
  // On vérifie qu'un entier a bien été saisi
  if (isAnInteger(quantity) === false) {
  } else {
    // On ajoute la nouvelle quantité à la quantité déjà dans le panier
    productAlreadyInCart.quantity = quantity;
    // Si la quantité est négative ou nulle, on supprime l'article du panier
    if (productAlreadyInCart.quantity <= 0) {
      removeFromCart(productAlreadyInCart.id, productAlreadyInCart.color);
    }
    // Sauvegarde le panier
    else {
      saveCart(cart);
    }
  // Actualise la page
  document.location.reload();
  }
}

// Fonction qui compte et affiche le nombre d'articles
export function numberOfItems() {
  // Récupère le panier
  let cart = getCart();
  // Crée un compteur
  let countItems = 0;
  // Incrémente le compteur avec la quantité de chaque référence du panier
  for (let i = 0; i < cart.length; i++) {
    countItems += cart[i].quantity * 1;
  }
  // Affiche le nombre d'articles dans le span #totalQuantity
  document.getElementById("totalQuantity").innerText = `${countItems}`;
}

// Fonction qui calcule et affiche le prix total
export function totalPrice() {
  // Récupère le panier
  let cart = getCart();
  // Crée un compteur
  let total = 0;
  // Incrémente le compteur avec le prix total pour chaque référence du panier
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].quantity * cart[i].price;
  }
  // Affiche le nombre d'articles dans le span #totalPrice
  document.getElementById("totalPrice").innerText = `${total}`;
}
