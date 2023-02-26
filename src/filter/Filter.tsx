import styled from 'styled-components';
import { Body, PrimaryLarge } from 'src/typography';
import closeIcon from 'src/assets/close.svg';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: #ffffff;
  overflow-y: hidden;
`;

const Title = styled(PrimaryLarge)`
  padding-left: 16px;
`;

const CloseIcon = styled.img`
  padding-right: 27px;
`;

const Label = styled.label`
  display: grid;
  grid-template-columns: 1em auto;
`;

const Checkbox = styled.input`
  display: grid;
  place-content: center;
  appearance: none;
  background-color: #ffffff;
  margin: 0;
  width: 15px;
  height: 15px;
  border: 2px solid ${(props) => props.theme.BodyAccent.color};
  border-radius: 12.5%;

  &:before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    box-shadow: inset 1em 1em black;
    transform: scale(0);
  }

  &:checked::before {
    transform: scale(1);
  }
`;

// const FilterContent = styled.div`
//   position: relative;
// `;

const Filter = () => {
  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Title>Filtrar</Title>
        <CloseIcon src={closeIcon} alt="close filter" />
      </div>
      <Body>Preço</Body>
      <Label>
        <Checkbox type="checkbox" name="" id="0-30" />
        de R$0 até R$30
      </Label>
    </Container>
  );
};

export default Filter;
