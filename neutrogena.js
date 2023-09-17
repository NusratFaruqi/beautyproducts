// JavaScript code for adding products to the cart and calculating total
document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".product");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  let cart = [];

  products.forEach((product, index) => {
    const addButton = product.querySelector(".add-to-cart");
    addButton.addEventListener("click", () => {
      addToCart(index);
    });
  });

  function addToCart(index) {
    const product = products[index];
    const productName = product.querySelector("h3").textContent;
    const productPrice = parseFloat(
      product.querySelector("p").textContent.replace("Price: $", "")
    );
    const cartItem = { name: productName, price: productPrice };

    cart.push(cartItem);
    updateCartDisplay();
    showShoppingMessage();
  }

  function updateCartDisplay() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItems.appendChild(listItem);
      total += item.price;
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
  }

  function showShoppingMessage() {
    const shoppingMessage = document.createElement("p");
    shoppingMessage.textContent = "Happy Shopping!";

    // Add the message to the cart section
    const cartSection = document.getElementById("cart");
    cartSection.appendChild(shoppingMessage);

    // Remove the message after a few seconds (e.g., 3 seconds)
    setTimeout(() => {
      cartSection.removeChild(shoppingMessage);
    }, 3000); // 3000 milliseconds (3 seconds)
  }

  const checkoutButton = document.getElementById("checkout");
  checkoutButton.addEventListener("click", () => {
    if (cart.length > 0) {
      alert("Thank you for your purchase!");
      cart = [];
      updateCartDisplay();
    } else {
      alert("Your cart is empty. Add products before checking out.");
    }
  });
});
