import styled from 'styled-components';
import filterIcon from 'src/assets/filter.svg';
import Book from 'src/book';
import cover from '../book/cover2.png';
import { PrimaryMedium } from 'src/typography';
import Filter from 'src/filter';
import Button from 'src/button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultText = styled(PrimaryMedium)`
  align-self: start;
  margin-left: 16px;
  margin-top: 0px;
`;

const VerticalShelf = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterableBookshelf = () => {
  return (
    <Container>
      <Filter />
      <ResultText>Resultados para &quot;Menino&quot;: </ResultText>
      <Button leftIcon={filterIcon} variant="primary">
        FILTRAR
      </Button>
      <VerticalShelf>
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isLarge />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isLarge />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isLarge />
        <Book cover={cover} title="O menino Nelson Mandela" author="Viviana Mazza" isLarge />
      </VerticalShelf>
    </Container>
  );
};

export default FilterableBookshelf;
