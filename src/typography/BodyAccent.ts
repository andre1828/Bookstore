import styled from 'styled-components';

export const BodyAccent = styled.p`
  font-weight: ${(props) => props.theme.BodyAccent.fontWeight};
  font-size: ${(props) => props.theme.BodyAccent.fontSize};
  color: ${(props) => props.theme.BodyAccent.color};
`;
