import { ThemeProvider } from 'styled-components';
import defaultTheme from '../theme/default-theme';
import Bookstore from '../bookstore';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Bookstore />
    </ThemeProvider>
  );
}

export default App;
