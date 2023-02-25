import Book from 'src/book/Book';
import Shelf from 'src/Shelf';
import cover from '../book/cover2.png';

const Bookcase = () => {
  return (
    <main>
      <Shelf title="Aventura">
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
      </Shelf>
      <Shelf title="Ação">
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
      </Shelf>
      <Shelf isHighlighted title="Destaques">
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
      </Shelf>
      <Shelf title="Infantil">
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isCoverOnly />
      </Shelf>
    </main>
  );
};

export default Bookcase;
