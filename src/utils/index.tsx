import Book from 'src/book';
import noCover from 'src/assets/no-cover.svg';

export const booksFromJson = (data) =>
  data.items.map((book) => (
    <Book
      key={book.id}
      title={book.title}
      cover={book.volumeInfo?.imageLinks?.thumbnail || noCover}
      author={book.author}
    />
  ));
