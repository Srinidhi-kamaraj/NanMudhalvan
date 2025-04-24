const conn = document.getElementById("container");

const store = fetch("https://fakestoreapi.com/products")
  .then((data) => data.json())
  .then((data) => {
    data.forEach((val) => {
      conn.innerHTML += `
      <div id="box"><div id="img"><img src=${
        val.image
      } width=250px height=300px></div>
        <h2>${val.title}</h2> 
        <h3>${val.category}</h3>
        
        <h1>$ ${val.price}</h1>
        
        <button onclick="cart(${val.id}, '${val.image}', '${val.title.replace(
        /'/g,
        "\\'"
      )}', '${val.category.replace(/'/g, "\\'")}', ${
        val.price
      })" >Add to Cart</button></div>
        `;
    });
  });

function cart(id, image, title, category, price) {
  let cartItems = JSON.parse(localStorage.getItem("Cartdata")) || [];
  let newItem = { id, image, title, category, price };

  // Check if item already exists in the cart
  let exists = cartItems.some((item) => item.id === id);
  if (!exists) {
    cartItems.push(newItem);
  }

  localStorage.setItem("Cartdata", JSON.stringify(cartItems));
  alert("Item added to cart!");
}
