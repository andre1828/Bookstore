import styled from 'styled-components';

export const BodySmall = styled.p`
  font-weight: ${(props) => props.theme.BodySmall.fontWeight};
  font-size: ${(props) => props.theme.BodySmall.fontSize};
  color: ${(props) => props.theme.BodySmall.color};
`;
