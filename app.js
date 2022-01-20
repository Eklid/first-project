let productImage = document.getElementById("product-image");

let products = ["product1.png", "product2.png", "product3.png"];

let pozicioni = 1;

//Kur shtypet butoni djathtas
function onNext() {
  //ndrysho pozicioni
  if (pozicioni == 2) {
    pozicioni = 0;
  } else if (pozicioni != 2) {
    pozicioni = pozicioni + 1;
  }
  //shfaq imazhin
  productImage.src = products[pozicioni];
}

//Kur shtypet butoni majtas
function onPrevious() {
  //ndrysho pozicioni
  if (pozicioni == 0) {
    pozicioni = 2;
  } else if (pozicioni != 0) {
    pozicioni = pozicioni - 1;
  }

  //shfaq imazhin
  productImage.src = products[pozicioni];
}
