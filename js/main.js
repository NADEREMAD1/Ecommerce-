// start Show Products In Container Shop
let myReq = new XMLHttpRequest();
myReq.open("GET", "https://fakestoreapi.com/products");
myReq.responseType = "json";
myReq.send();

myReq.onload = function () {
  let Posts = myReq.response;
  let den = document.getElementById("den");

  function displayProducts(products) {
    den.innerHTML = "";
    for (Post of products) {
      den.innerHTML += `
        <div class="product-container col">
          <div class="content-Products">
            <img class="product-image" src="${Post["image"]}">
            <h5 class="product-title">${Post["title"]}</h5>
            <h5 class="product-price">${Post["price"]}</h5>
          </div>
          <button onclick="addToCart()" class="add-to-cart-button">Add to Cart</button>
        </div>
      `;
    }
    addToCart();
  }
  displayProducts(Posts);
  // Function to handle search
  function searchProducts(searchTerm) {
    let filteredProducts = Posts.filter((post) =>
      post["title"].toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayProducts(filteredProducts);
  }
  // Event listener for form submission
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let searchTerm = document.getElementById("searchInput").value;
    searchProducts(searchTerm);
  });
};
// Start Function counter cart
let cartCount = 0; // العدد الحالي للمنتجات في السلة
function addToCart() {
  cartCount++; // زيادة العدد بواحد
  updateCartCount();
  // استدعاء الدالة لتحديث عدد المنتجات في السلة
  // ===================== add product in offcanvas-body
}
function updateCartCount() {
  let cartElement = document.getElementById("cartCount");
  cartElement.innerText = cartCount; // تحديث قيمة العدد في العنصر المعرف بـ "cartCount"
}

// =======================================
