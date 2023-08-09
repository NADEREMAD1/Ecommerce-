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
          <div class="content-Products ">
            <img class="product-image " src="${Post["image"]}">
            <h5 class="product-title text-white">${Post["title"]}</h5>
            <h5 class="product-price text-white">${Post["price"]}</h5>
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

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// End Section Filter
