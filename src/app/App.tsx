import { ThemeProvider } from 'styled-components';
import './App.css';
import defaultTheme from '../theme/default-theme';
import Book from '../book';
import cover from '../book/cover2.png';
import Shelf from '../Shelf';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Shelf>
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" />
      </Shelf>
    </ThemeProvider>
  );
}

export default App;
