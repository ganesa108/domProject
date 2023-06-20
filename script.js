const incBtns = document.getElementsByClassName("plus");
const totalPrice = document.querySelector(".totalPrice");
const itemPrices = document.getElementsByClassName("itemPrice");
const quantity = document.querySelector(".quantity");
const itemQuantity = document.getElementsByClassName("itemQuantity");
let quantity2 = parseInt(quantity.innerText);
let totalPrice2 = parseFloat(totalPrice.innerText);

function increment() {
    for (let i = 0; i < incBtns.length; i++) {
    incBtns[i].addEventListener("click", function () {
        quantity2++;
        quantity.textContent = quantity2;
        totalPrice2 += parseFloat(itemPrices[i].innerText);
        totalPrice.textContent = totalPrice2.toFixed(2);
        let itemQuantity2 = parseInt(itemQuantity[i].innerText);
        itemQuantity2++;
        itemQuantity[i].textContent = itemQuantity2;
    });
    }
}
increment();

const decBtns = document.getElementsByClassName("minus");

function decrement() {
  for (let i = 0; i < decBtns.length; i++) {
    decBtns[i].addEventListener("click", function () {
      let itemQuantity2 = parseInt(itemQuantity[i].innerText);
      if (quantity2 > 0 && itemQuantity2 > 0) {
        quantity2--;
        quantity.textContent = quantity2;
        itemQuantity2--;
        itemQuantity[i].textContent = itemQuantity2;
      } else {
        // Handle the case where the values should not go below zero
        quantity2 = 0;
        quantity.textContent = quantity2;
        itemQuantity2 = 0;
        itemQuantity[i].textContent = itemQuantity2;
      }

      // Recalculate the totalPrice based on individual product prices
      totalPrice2 = 0;
      for (let j = 0; j < itemQuantity.length; j++) {
        totalPrice2 +=
          parseFloat(itemPrices[j].innerText) *
          parseInt(itemQuantity[j].innerText);
      }
      totalPrice.textContent = totalPrice2.toFixed(2);
    });
  }
}
decrement();