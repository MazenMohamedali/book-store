let landingpage = document.querySelector(".why-read");

let imagearray = ["01.png", "02.png", "03.png", "04.png", "05.png"];

setInterval(() => {
  let randomNumber = Math.floor(Math.random() * imagearray.length);
  landingpage.style.backgroundImage =
    'url("/background/' + imagearray[randomNumber] + '")';
  landingpage.style.backgroundSize = "cover";
  landingpage.style.backgroundRepeat = "no-repeat";
  landingpage.style.backgroundPosition = "center";
}, 5000);

function search() {
  let searchber = document.querySelector(".search-input").value.toUpperCase();
  let productList = document.querySelector(".products-list");
  let product = document.querySelectorAll(".product");
  let productName = document.getElementsByTagName("h2");

  for (let i = 0; i < productName.length; i++) {
    if (productName[i].innerHTML.toUpperCase().indexOf(searchber) >= 0) {
      product[i].style.display = "";
    } else {
      product[i].style.display = "none";
    }
  }
}
