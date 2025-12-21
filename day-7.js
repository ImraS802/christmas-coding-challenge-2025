/*
Find the first book published before 1940. Use .find()
*/

const books = [
  {title: 'The Hobbit', author: 'Tolkien', year: 1937, available: true},
  {title: 'Dune', author: 'Frank Herbert', year: 1965, available: false},
  {title: '1984', author: 'George Orwell', year: 1949, available: true},
  {title: 'Foundation', author: 'Isaac Asimov', year: 1951, available: true},
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
    available: false,
  },
];

function isPublishedBefore(date) {
  return date.year < 1940;
}

// console.log(books.find(isPublishedBefore));
