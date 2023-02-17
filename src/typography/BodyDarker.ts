import styled from 'styled-components';

export const BodyDarker = styled.p`
  font-weight: ${(props) => props.theme.BodyDarker.fontWeight};
  font-size: ${(props) => props.theme.BodyDarker.fontSize};
  color: ${(props) => props.theme.BodyDarker.color};
`;
