import styled from 'styled-components';

export const PrimarySmall = styled.p`
  font-weight: ${(props) => props.theme.PrimarySmall.fontWeight};
  font-size: ${(props) => props.theme.PrimarySmall.fontSize};
  color: ${(props) => props.theme.PrimarySmall.color};
`;
