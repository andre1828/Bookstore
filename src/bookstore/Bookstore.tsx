import Content from 'src/content';
import Footer from 'src/footer';
import Header from 'src/header';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: min-content 1fr min-content;
`;

const Bookstore = () => {
  return (
    <Container>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
};

export default Bookstore;
