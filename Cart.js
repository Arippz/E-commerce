if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var quantityInputs = document.getElementsByClassName("item-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  var removeCartItemButtons = document.getElementsByClassName("remove-item");
  for (let i = 0; i < removeCartItemButtons.length; i++) {
    const rembutton = removeCartItemButtons[i];
    rembutton.addEventListener("click", removeCartItem);
  }
  var addToCartButtton = document.getElementsByClassName("shop-item-button");
  console.log(addToCartButtton.length);
  for (let i = 0; i < addToCartButtton.length; i++) {
    const button = addToCartButtton[i];
    console.log(button.parentElement.parentElement);
    button.addEventListener("click", addToCartClicked);
  }
}
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function visi() {
  var popup = document.getElementById("pop");
  var popupc = document.getElementById("cartlogo");
  popup.classList.toggle("show");
  popupc.classList.toggle("cow");
  console.log("no");
}
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function updateCartTotal() {
  var cartItemsContainer = document.getElementsByClassName("cart-itemsz")[0];
  var cartRows = cartItemsContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    const cartrow = cartRows[i];
    var priceElement = cartrow.getElementsByClassName("price")[0];
    var quantityElement = cartrow.getElementsByClassName("item-quantity")[0];
    var totprice = parseFloat(priceElement.innerText.replace("$", ""));
    var totval = quantityElement.value;
    total = total + totval * totprice;
  }
  document.getElementsByClassName("Resprice")[0].innerHTML = "$" + total;
}

function addToCartClicked(event) {
  console.log("ooomaga");
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("title-card-column")[0].innerText;
  var price = shopItem.getElementsByClassName("price-card-column")[0].innerText;
  var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
  addItemToCart(title, price, imageSrc);
  updateCartTotal();
  console.log(title);
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-itemsz")[0];
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This item is already added to the cart");
      return;
    }
  }
  var cartRowContents = `
        <div class="cart-row">
        <div class="product-item">
          <img class="cart-img" src="${imageSrc}" />
          <p class="productname">${title}</p>
        </div>
        <p class="price cart-column">${price}</p>
        <div class="cart-buttonsz">
          <input
            type="number"
            name="item-quantity"
            id="item-quantity"
            class="item-quantity"
            value="1" />
          <button class="remove-item" id="remove-item">REMOVE</button>
        </div>
      </div>

`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("remove-item")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("item-quantity")[0]
    .addEventListener("change", quantityChanged);
}
