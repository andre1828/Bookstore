import styled from 'styled-components';
import { Body, BodyDarker, PrimaryLarge } from 'src/typography';
import closeIcon from 'src/assets/close.svg';
import Button from '../button/Button';
import filterIcon from 'src/assets/filter.svg';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: #ffffff;
  overflow-y: hidden;
`;

const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
`;

const Title = styled(PrimaryLarge)`
  padding-left: 16px;
`;

const CloseIcon = styled.img`
  padding-right: 27px;
`;

const FilterContent = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  height: 14%;
`;

const FilterAreaTitle = styled(Body)`
  margin-bottom: 22px;
`;

const Label = styled.label`
  display: grid;
  grid-template-columns: 1em auto;
  margin-bottom: 24px;
  line-height: 1.3;
  gap: 0.5em;
`;

const Checkbox = styled.input`
  display: grid;
  place-content: center;
  appearance: none;
  background-color: #ffffff;
  margin: 0;
  width: 18px;
  height: 18px;
  border: 2px solid ${(props) => props.theme.BodyAccent.color};
  border-radius: 25%;

  &:before {
    content: '';
    width: 0.75em;
    height: 0.75em;
    box-shadow: inset 1em 1em ${(props) => props.theme.BodyAccent.color};
    transform: scale(0);
  }

  &:checked::before {
    transform: scale(1);
  }
`;

const LabelText = styled(BodyDarker)`
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

const Filter = () => {
  return (
    <Container>
      <FilterHeader>
        <Title>Filtrar</Title>
        <CloseIcon src={closeIcon} alt="close filter" />
      </FilterHeader>
      <FilterContent>
        <FilterAreaTitle>Preço</FilterAreaTitle>
        <Label>
          <Checkbox type="checkbox" name="" />
          <LabelText>de R$0 até R$30</LabelText>
        </Label>
        <Label>
          <Checkbox type="checkbox" name="" />
          <LabelText>de R$31 até R$50</LabelText>
        </Label>
        <Label>
          <Checkbox type="checkbox" name="" />
          <LabelText>de R$51 até R$100</LabelText>
        </Label>
        <Label>
          <Checkbox type="checkbox" name="" />
          <LabelText>Mais de R$100</LabelText>
        </Label>
        <FilterAreaTitle>Disponilidade para venda</FilterAreaTitle>
        <Label>
          <Checkbox type="checkbox" name="" />
          <LabelText>Disponível</LabelText>
        </Label>
        <Label>
          <Checkbox type="checkbox" name="" />
          <LabelText>Indisponível</LabelText>
        </Label>
        <FilterAreaTitle>Formatos disponíveis</FilterAreaTitle>
        <Label>
          <Checkbox type="checkbox" name="" />
          <LabelText>e-pub</LabelText>
        </Label>
        <Label>
          <Checkbox type="checkbox" name="" />
          <LabelText>PDF</LabelText>
        </Label>
        <ButtonContainer>
          <Button variant="primary" leftIcon={filterIcon}>
            FILTRAR AGORA
          </Button>
        </ButtonContainer>
      </FilterContent>
    </Container>
  );
};

export default Filter;
