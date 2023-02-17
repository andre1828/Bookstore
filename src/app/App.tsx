import {
  Body,
  BodyAccent,
  BodyAccentBold,
  BodyDarker,
  BodySmall,
  PrimaryHighlight,
  PrimaryLarge,
  PrimaryMedium,
  PrimarySmall
} from '../typography';
import { ThemeProvider } from 'styled-components';
import './App.css';

const theme = {
  PrimaryLarge: {
    fontWeight: 600,
    fontSize: '18px',
    color: '#000000'
  },
  PrimaryMedium: {
    fontWeight: 600,
    fontSize: '16px',
    color: '#000000'
  },
  PrimarySmall: {
    fontWeight: 600,
    fontSize: '12px',
    color: '#000000'
  },
  Body: {
    fontWeight: 600,
    fontSize: '14px',
    color: '#9EAEB7'
  },
  BodySmall: {
    fontWeight: 400,
    fontSize: '10px',
    color: '#999999'
  },
  BodyDarker: {
    fontWeight: 400,
    fontSize: '14px',
    color: '#053B4B'
  },
  BodyAccent: {
    fontWeight: 400,
    fontSize: '16px',
    color: '#406A76'
  },
  BodyAccentBold: {
    fontWeight: 700,
    fontSize: '16px',
    color: '#406A76'
  },
  PrimaryHighlight: {
    fontWeight: 600,
    fontSize: '28px',
    color: '#A977D8'
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PrimaryLarge>Ação</PrimaryLarge>
      <PrimaryMedium>Ação</PrimaryMedium>
      <PrimarySmall>Ação</PrimarySmall>
      <Body>Preço</Body>
      <BodySmall>Viviana Mazza</BodySmall>
      <BodyDarker>de R$0 até R$30</BodyDarker>
      <BodyAccent>Search</BodyAccent>
      <BodyAccentBold>Search</BodyAccentBold>
      <PrimaryHighlight>Destaques</PrimaryHighlight>
    </ThemeProvider>
  );
}

export default App;
