// Fonction qui récupère le numéro de commande dans l'URL de la page
function getOrderId() {
  return new URL(location.href).searchParams.get("orderId");
}

// Fonction qui affiche le numéro de commande
function displayOrderId() {
  let orderId = getOrderId();
  document.getElementById("orderId").innerText = `${orderId}`;
}
