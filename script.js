// Import DOM elements as JS elements using queryselector
const item = document.querySelector('#item');
const price = document.querySelector('#price');
const addItemBtn = document.querySelector('#additem');
const totalBtn = document.querySelector('#cart-total');
const animateBtn = document.querySelector('#animate-btn');
const cardFlipper = document.querySelectorAll('.card-flipper');

let total = [];
let animation = false;

// Add items dynamically to the webpage using document.createElement and setting display to visible
function addToCart(item, price) {
  let itemList = document.createElement('li');
  itemList.textContent = `${item}: $${price}`;
  document.querySelector('.display-cart').appendChild(itemList);
  document.querySelector('.display-cart').style.display = 'flex';
  totalBtn.style.display = 'unset';
}

// Function to calculate total cost of items in cart and display in browser
function cartTotal() {
  let cost = 0;
  for (let i = 0; i < total.length; i++) {
    cost += total[i];
  }
  document.querySelector('#cost').textContent = cost;
}

// triggerBoxAnimation function triggers animation effects on the box after animate button is clicked
function triggerBoxAnimation() {
  let box = document.querySelector('.box');
  box.classList.add('box-animate');
  setTimeout(() => {
    box.classList.remove('box-animate');
  }, 1000);
}

// The triggerCardAnimation function flips a card by adding animation to flipper cards
function triggerCardAnimation(flipper) {
  flipper.style.zIndex -= 1;
  flipper.style.animationName = 'animate-slider';
  flipper.style.animationDuration = '2s';
  flipper.style.animationDirection = 'forwards';

  setTimeout(() => {
    flipper.style.animation = 'none';
  }, 2000)
}

// Listen for click events on the add button and check for empty values
addItemBtn.addEventListener('click', () => {
  if (item.value !== '' && price.value !== '') {
    total.push(Number(price.value));
    addToCart(item.value, price.value);
    item.value = '';
    price.value = '';
  } else {
    alert('Please fill both Item and Price fields.');
  }
})

// Listen for click events on the totals button to calculate total price
totalBtn.addEventListener('click', cartTotal)

// Animate Button listening for click events and calls the function to add animations to the box
animateBtn.addEventListener('click', triggerBoxAnimation);

// Add event listeners to all the card flipper elements
cardFlipper.forEach(flipper => flipper.addEventListener('click', () => {
  triggerCardAnimation(flipper);
}));