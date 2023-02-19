import { ThemeProvider } from 'styled-components';
import './App.css';
import defaultTheme from '../theme/default-theme';
import Book from '../book';
import cover from '../book/cover2.png';
import Shelf from '../Shelf';
import Bookcase from '../bookcase';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Bookcase>
        <Shelf title="Aventura">
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
      </Bookcase>
    </ThemeProvider>
  );
}

export default App;
