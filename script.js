function addToCart(productName, screenSize, color) {
    var cartItem = {
      name: productName,
      size: screenSize,
      color: color
    };
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart");

    // Retrieve the cart items from local storage
const cartItems = JSON.parse(localStorage.getItem('cartItems'));

// Check if there are any items in the cart
if (cartItems && cartItems.length > 0) {
  // Get a reference to the <ul> element in the HTML
  const cartList = document.querySelector('ul');

  // Loop through each item in the cart and add it to the <ul> element
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.model} - ${item.color} - ${item.price}`;
    cartList.appendChild(li);
  });
}
  }