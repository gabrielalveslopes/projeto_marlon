document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".add-to-cart");
    const cartCount = document.querySelector(".cart-count");
  
    let count = localStorage.getItem("cartCount");
    if (count) {
        count = parseInt(count);
      } else {
        count = 0;
      }
      
    cartCount.textContent = count;
  
    let cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
        cartItems = JSON.parse(cartItems);
      } else {
        cartItems = [];
      }
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const nome = button.dataset.nome;
        const preço = button.dataset.preço;
  
        const item = { nome, preço};
  
        cartItems.push(item);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
  
        count++;
        cartCount.textContent = count;
        localStorage.setItem("cartCount", count);
      });
    });
  });

  
  