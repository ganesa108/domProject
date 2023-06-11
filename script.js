const incBtns = document.getElementsByClassName('plus')
const totalPrice =document.querySelector('.totalPrice');
const itemPrices = document.getElementsByClassName('itemPrice')
var quantity =document.querySelector('.quantity');
var quantity2 = parseInt(quantity.innerText)
var totalPrice2 = parseInt(totalPrice.innerText)



function increment(){
    for (let i = 0; i < incBtns.length; i++) {
        incBtns[i].addEventListener('click',function(){
            quantity2++
            quantity.textContent = quantity2
            totalPrice2 += parseInt(itemPrices[i].innerText)
            totalPrice.textContent = totalPrice2
        })
        
    }
}
increment();

const decBtns = document.getElementsByClassName('minus')


function decrement(){
    for (let i = 0; i < decBtns.length; i++) {
        decBtns[i].addEventListener('click', function(){
            if (quantity2>0) {
                quantity2--;
                quantity.textContent = quantity2;
                if (totalPrice2>0) {
                    totalPrice2 -= parseInt(itemPrices[i].innerText);
                    totalPrice.textContent = totalPrice2;
                }
            }
            
        })
        
    }
}
decrement();

console



