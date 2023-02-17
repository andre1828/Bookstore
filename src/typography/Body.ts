import styled from 'styled-components';

export const Body = styled.p`
  font-weight: ${(props) => props.theme.Body.fontWeight};
  font-size: ${(props) => props.theme.Body.fontSize};
  color: ${(props) => props.theme.Body.color};
`;
