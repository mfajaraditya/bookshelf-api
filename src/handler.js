const {nanoid} = require('nanoid');
const notes = require('./notes');

const addBookHandler = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  const id = nanoid(12);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

//   const newBook = {
//     name,
//     year,
//     author,
//     summary,
//     publisher,
//     pageCount,
//     readPage,
//     reading,
//     id,
//     finished,
//     insertedAt,
//     UpdatedAt,
//   }
};
