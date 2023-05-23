function visi() {
  var popup = document.getElementById("pop");
  var popupc = document.getElementById("cartlogo");
  popup.classList.toggle("show");
  popupc.classList.toggle("cow");
  console.log("no");
}

var removeCartItemButtons = document.getElementsByTagName("button");
console.log(removeCartItemButtons);
console.log(removeCartItemButtons.length);
console.log("whoa");
for (let i = 0; i < removeCartItemButtons.length; i++) {
  const rembutton = removeCartItemButtons[i];
  rembutton.addEventListener("click", (event) => {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
  });
}

function updateCartTotal() {
  var cartItemsContainer = document.getElementsByClassName("minicart-items")[0];
  console.log(cartItemsContainer);
  var cartRows = cartItemsContainer.getElementsByClassName("cart-row");
  console.log(cartRows);
  for (let y = 0; y < cartRows.length; y++) {
    const cartrow = cartRows[y];
    var priceElement = cartrow.getElementsByClassName("cart-price")[0];
  }
}
