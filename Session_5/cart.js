const con = document.getElementById("container");

// Retrieve stored cart data
let cartData = JSON.parse(localStorage.getItem("Cartdata")) || [];

if (cartData.length === 0) {
  con.innerHTML = "<h2>No items in cart</h2>";
} else {
  cartData.forEach((val) => {
    con.innerHTML += `
    <div id="box">
      <div id="img"><img src="${val.image}" width="250px" height="300px"></div>
      <h2>${val.title}</h2> 
      <h3>${val.category}</h3>
      <h1>$${val.price}</h1>
      <button onclick="buyNow(${val.id})">Buy Now!</button>
      
    </div>
    `;
  });
}

function buyNow(id) {
  alert("Proceeding to checkout for item ID: " + id);
}
