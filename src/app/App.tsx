import { ThemeProvider } from 'styled-components';
import './App.css';
import defaultTheme from '../theme/default-theme';
import Book from '../book';
import cover from '../book/cover2.png';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" />
    </ThemeProvider>
  );
}

export default App;
