import styled from 'styled-components';

export const PrimaryMedium = styled.h2`
  font-weight: ${(props) => props.theme.PrimaryMedium.fontWeight};
  font-size: ${(props) => props.theme.PrimaryMedium.fontSize};
  color: ${(props) => props.theme.PrimaryMedium.color};
`;
