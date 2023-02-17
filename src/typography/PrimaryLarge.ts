import styled from 'styled-components';

export const PrimaryLarge = styled.h2`
  font-weight: ${(props) => props.theme.PrimaryLarge.fontWeight};
  font-size: ${(props) => props.theme.PrimaryLarge.fontSize};
  color: ${(props) => props.theme.PrimaryLarge.color};
`;
