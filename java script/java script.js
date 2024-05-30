let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  

}

let cart = [];

  function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartDisplay();
  }

  function updateCartDisplay() {
    let cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;

    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
      cartItems.innerHTML += `<div>${item.name} - $${item.price}</div>`;
      total += item.price;
    });

    let cartTotal = document.getElementById("cart-total");
    cartTotal.textContent = total.toFixed(2);
  }

  function toggleCart() {
    let cart = document.getElementById("cart");
    cart.style.display = (cart.style.display === "none") ? "block" : "none";
  }