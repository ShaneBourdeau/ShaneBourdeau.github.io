'use strict';

const dogCardsContainer = document.getElementById('dog-cards-container');

// Function to create and display a dog card
function createDogCard(id, imageUrl) {
  const col = document.createElement('div');
  col.classList.add('col-md-6'); // This will make the card take up half of the width on medium screens

  const card = document.createElement('div');
  card.classList.add('card', 'dog-card');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const img = document.createElement('img');
  img.src = imageUrl;
  img.classList.add('card-img-top');

  // Add the image to the card body
  cardBody.appendChild(img);

  // Add card body to the card
  card.appendChild(cardBody);

  // Add the card to the container
  col.appendChild(card);
  dogCardsContainer.appendChild(col);
}

// Function to fetch dog image data
async function fetchDogPicsAsync() {
  const url = 'https://dog.ceo/api/breeds/image/random';
  const response = await fetch(url);
  const data = await response.json();
  return data.message;
}

// Function to display two dog images
async function displayTwoDogs() {
  dogCardsContainer.innerHTML = ''; // Clear the container before adding new cards

  // Fetch two dog pictures and display them
  for (let i = 0; i < 2; i++) {
    const imageUrl = await fetchDogPicsAsync();
    createDogCard(i + 1, imageUrl);
  }
}

// Event listener for the button click to fetch dog pics
document.getElementById('myBtn').addEventListener('click', displayTwoDogs);

// Initial call to display two dog images
displayTwoDogs();

function getGOTInfo() {
  let url = 'https://anapioficeandfire.com/api/characters/583';

  const response = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.aliases[0]);
    });
}

let myBtn = document.getElementById('myBtn');
myBtn.addEventListener('click', (event) => {
  getGOTInfo();
});
