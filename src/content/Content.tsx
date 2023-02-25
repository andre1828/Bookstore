import { useState } from 'react';
import styled from 'styled-components';
import StartPage from 'src/StartPage';

const Container = styled.div`
  padding-bottom: 15%;
`;

const Content = () => {
  const [shouldShowStartPage] = useState(true);

  return (
    <>
      <Container>
        <p>Search</p>
        {shouldShowStartPage ? <StartPage /> : <></>}
      </Container>
      ;
    </>
  );
};

export default Content;
