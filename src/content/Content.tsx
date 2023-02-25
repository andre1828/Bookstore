import { useState } from 'react';
import styled from 'styled-components';
import StartPage from 'src/StartPage';
import Search from 'src/search';

const Container = styled.div`
  padding-bottom: 15%;
`;

const Content = () => {
  const [shouldShowStartPage] = useState(true);

  return (
    <>
      <Container>
        <Search />
        {shouldShowStartPage ? <StartPage /> : <></>}
      </Container>
    </>
  );
};

export default Content;
