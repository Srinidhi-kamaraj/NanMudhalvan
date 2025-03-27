mobile = [
  {
    productId: 1,
    brand: "Samsung",
    model: "Galaxy S25",
    image:
      "https://m.media-amazon.com/images/I/61p3FwE31-L._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "Samsung Galaxy S25 5G AI Smartphone (Icyblue, 12GB RAM, 256GB Storage)",
    price: 45000,
  },
  {
    productId: 2,
    brand: "OnePlus",
    model: "Nord CE4",
    image:
      "https://m.media-amazon.com/images/I/5155PFA2N+L._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "OnePlus Nord CE4 Lite 5G (Mega Blue, 8GB RAM, 128GB Storage)| with No Cost EMI",
    price: 65000,
  },
  {
    productId: 3,
    brand: "OPPO",
    model: "NARZO N65",
    image:
      "https://m.media-amazon.com/images/I/71ocQY+G2XL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "realme NARZO N65 5G (Amber Gold 8GB RAM, 128GB Storage) India's 1st D6300 5G Chipset | Ultra Slim Design",
    price: 49999,
  },
  {
    productId: 4,
    brand: "Vivo",
    model: "V50 ",
    image:
      "https://m.media-amazon.com/images/I/71lw7TJwT+L._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "Vivo V50 5G (Rose Red, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers",
    price: 55000,
  },
];
const con = document.getElementById("container");

for (let i = 0; i < mobile.length; i++) {
  con.innerHTML += `
  <div><img src=${mobile[i].image}>
<h1>${mobile[i].brand}</h1>
<h2>${mobile[i].model}</h2>
<p>${mobile[i].description}</p>
<h1>Rs.${mobile[i].price}</h1>
<button onclick="cart(${mobile[i].productId})">Add to Cart</button>
</div>

`;
}
let arr = [];
function cart(prod_id) {
  //   console.log(mobile[prod_id - 1]);
  if (localStorage.length == 0) {
    arr = [];
  }
  arr.push(mobile[prod_id - 1]);
  localStorage.setItem("Cartdata", JSON.stringify(arr));
}
