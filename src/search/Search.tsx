import styled from 'styled-components';
import magnifyingGlass from 'src/assets/magnifying-glass.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 23px auto 36px;
  border: 1px solid #dee1e6;
  border-radius: 20px;
  width: 90%;
  max-width: 1350px;
  height: 35px;
  background-color: #f1f7fc;
`;

const Input = styled.input`
  font-weight: ${(props) => props.theme.BodyAccent.fontWeight};
  font-size: ${(props) => props.theme.BodyAccent.fontSize};
  color: ${(props) => props.theme.BodyAccent.color};
  margin-left: 18px;
  width: 70%;
  background-color: #f1f7fc;
  border-style: none;

  &::placeholder {
    color: ${(props) => props.theme.BodyAccent.color};
  }
`;

const SearchIcon = styled.img`
  width: 16px;
  margin-right: 18px;
`;

const Search = () => {
  return (
    <Container>
      <Input type="text" placeholder="Search" />
      <SearchIcon src={magnifyingGlass} alt="" />
    </Container>
  );
};

export default Search;
