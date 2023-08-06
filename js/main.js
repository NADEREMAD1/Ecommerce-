// JavaScript
let cartCount = 0; // العدد الحالي للمنتجات في السلة

function addToCart() {
  cartCount++; // زيادة العدد بواحد
  updateCartCount(); // استدعاء الدالة لتحديث عدد المنتجات في السلة
}

function updateCartCount() {
  let cartElement = document.getElementById("cartCount");
  cartElement.innerText = cartCount; // تحديث قيمة العدد في العنصر المعرف بـ "cartCount"
}
updateCartCount();
// يمكنك استدعاء الدالة updateCartCount() مرة أخرى لتحديث العدد في حالة أي تغيير آخر على السلة
// ...
