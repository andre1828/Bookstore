import styled from 'styled-components';

export const BodyAccentBold = styled.p`
  font-weight: ${(props) => props.theme.BodyAccentBold.fontWeight};
  font-size: ${(props) => props.theme.BodyAccentBold.fontSize};
  color: ${(props) => props.theme.BodyAccentBold.color};
`;
