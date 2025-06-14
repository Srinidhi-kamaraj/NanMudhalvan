const con = document.querySelector(".container");
const miniImg = document.getElementsByClassName("my-img");
let img = [
  "https://wallpaper.dog/large/10940914.jpg",
  "http://getwallpapers.com/wallpaper/full/e/1/4/169557.jpg",
  "https://wallpaperaccess.com/full/38636.jpg",
  "https://cdn.wallpapersafari.com/47/55/Sg5pZF.jpg",
];

let i = 0;
function next() {
  miniImg[i].classList.remove("active");
  i++;
  if (i == img.length) {
    i = 0;
  }
  miniImg[i].classList.add("active");
  con.style.backgroundImage = 'url("' + img[i] + '")';
}

function prev() {
  miniImg[i].classList.remove("active");
  i--;
  if (i < 0) {
    i = img.length - 1;
  }
  miniImg[i].classList.add("active");
  con.style.backgroundImage = 'url("' + img[i] + '")';
}
