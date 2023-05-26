import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

console.log('Hello Coders! :)');

const cardElement = (resto) => `
<div class="card w-full bg-base-100 shadow-xl">
  <figure><img class="object-cover h-48 w-full" src="https://restaurant-api.dicoding.dev/images/medium/${resto.pictureId}" alt="${resto.name}" /></figure>
  <div class="card-body">
    <h2 class="card-title">${resto.name}</h2>
    <p>${resto.description.substring(0, 150)}....</p>
  </div>
  <button class="btn btn-primary">Detail</button>
</div>`;

const getData = async () => {
  try {
    const response = await fetch('https://restaurant-api.dicoding.dev/list');
    const { restaurants } = await response.json();

    displayData(restaurants);
  } catch (error) {
    console.log('Erord pada : ', error);
  }
};

const displayData = (restaurants) => {
  const container = document.querySelector('#container');
  restaurants.forEach((resto) => {
    container.innerHTML += cardElement(resto);
  });
};

getData();
