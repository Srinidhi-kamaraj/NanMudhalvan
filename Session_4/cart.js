const mobile = JSON.parse(localStorage.getItem("Cartdata"));
console.log(mobile);

const con = document.getElementById("container");

for (let i = 0; i < mobile.length; i++) {
  con.innerHTML += `
  <div><img src=${mobile[i].image}>
<h1>${mobile[i].brand}</h1>
<h2>${mobile[i].model}</h2>
<p>${mobile[i].description}</p>
<h1>Rs.${mobile[i].price}</h1>
<button onclick="cart(${mobile[i].productId})">Buy Now!</button>
</div>

`;
}
