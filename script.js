// const catalog = [
//   {
//     img: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2024/08/shadow-looking-unimpressed-in-sonic-the-hedgehog-3.jpg',
//     name: 'Ёж Щедоу',
//     oldPrice: 3000000,
//     newPrice: 5000000,
//   },
//   {
//     img: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/08/sonic-the-hedgehog-shadow-sonic.jpg',
//     name: 'Эпичная Битва',
//     oldPrice: 50000000,
//     newPrice: 100000000,
//   },
//   {
//     img: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2024/05/sonic-shadow-hyped-by-ben-schwartz-sr-exlusive.jpg',
//     name: 'Пробуждение от вечного сна',
//     oldPrice: 50000000,
//     newPrice: 100000000,
//   }
// ]

import './ProductsData.js'

const wrapper = document.querySelector('.wrapper');

const cards = ProductsData.map((card) => {
  return `
   <div class="card">
      <img src=${card.imageUrl} alt="fox">
      <h3>${card.name}</h3>
      <b>${card.brand}</b>
      <h2>${card.price} ${card.currency}</h2>
      <p>${card.category.name }</p>
   </div>
   `;
}).join('');

wrapper.innerHTML = cards;
