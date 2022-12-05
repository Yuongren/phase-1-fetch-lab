// function fetchBooks() {
//   return fetch("https://anapioficeandfire.com/api/books")
//   .then((resp) => resp.json())
//   .then((json) => console.log(json));
//   // To pass the tests, don't forget to return your fetch!
  
// }

// function renderBooks(books) {
//   const main = document.querySelector('main');
//   books.forEach(book => {
//     const h2 = document.createElement('h2');
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   });
// }

// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks();
// });
// AssertionError expected { Spy 'object.renderBooks' }
// function renderBooks(books) {
//   var main = document.querySelector('main');
//   books.forEach(function (book) {
//     var h2 = document.createElement('h2');
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   });
// }
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
document.addEventListener("DOMContentLoaded", function() {
  fetchBooks();
});
 function fetchBooks() {

  fetch("https://anapioficeandfire.com/api/books")
    .then(res => res.json()).then(json => renderBooks(json));
}

function renderBooks(json) {
  const main = document.querySelector('main')
  const main = document.querySelector("main");
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
    const h2 = document.createElement("h2");
    h2.innerHTML = `<h2>${book.name}</h2>`;
    main.appendChild(h2);
  };


