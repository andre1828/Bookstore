import styled from 'styled-components';
import filterIcon from 'src/assets/filter.svg';
import Book from 'src/book';
import cover from '../book/cover2.png';
import { PrimaryMedium } from 'src/typography';

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

const FilterButton = styled.div`
  width: 90%;
  height: 55px;
  background-color: #8553f4;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  border: none;
  border-radius: 10px;

  display: flex;
  align-content: baseline;
  justify-content: center;
  flex-wrap: wrap;
`;

const VerticalShelf = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterIcon = styled.img`
  width: 13px;
  padding-right: 5px;
`;

const FilterableBookshelf = () => {
  return (
    <Container>
      <ResultText>Resultados para &quot;Menino&quot;: </ResultText>
      <FilterButton role="button">
        <FilterIcon src={filterIcon} alt="" /> <p>FILTRAR</p>
      </FilterButton>
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
