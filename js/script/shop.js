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
      <div class="product-container col" data-aos="zoom-in">
        <div class="content-Products ">
          <img class="product-image " src="${Post["image"]}">
          <h5 class="product-title ">${Post["title"]}</h5>
          <h5 class="product-price ">${Post["price"]}</h5>
          <i class="fa-regular fa-star-half-stroke" style="color: #10b5cb;"></i>
          <i class="fa-regular fa-star-half-stroke" style="color: #10b5cb;"></i>
          <i class="fa-regular fa-star-half-stroke" style="color: #10b5cb;"></i>
          <i class="fa-regular fa-star-half-stroke" style="color: #10b5cb;"></i>
        </div>
        <button onclick="addToCart('${Post.title}')" class="add-to-cart-button">Add to Cart</button>
      </div>
      `;
    }
    addToCart();
  }
  displayProducts(Posts);
};
// ============================================

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

// Start Section Filter
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
// End Section Filter
