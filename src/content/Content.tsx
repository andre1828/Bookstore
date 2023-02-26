import { useState } from 'react';
import styled from 'styled-components';
import StartPage from 'src/startPage';
import Search from 'src/search';
import FilterableBookshelf from 'src/filterableBookshelf';

const Container = styled.div`
  padding-bottom: 15%;
`;

const Content = () => {
  const [shouldShowStartPage] = useState(false);

  return (
    <>
      <Container>
        <Search />
        {shouldShowStartPage ? <StartPage /> : <FilterableBookshelf />}
      </Container>
    </>
  );
};

export default Content;
