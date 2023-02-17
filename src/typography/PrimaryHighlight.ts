import styled from 'styled-components';

export const PrimaryHighlight = styled.h2`
  font-weight: ${(props) => props.theme.PrimaryHighlight.fontWeight};
  font-size: ${(props) => props.theme.PrimaryHighlight.fontSize};
  color: ${(props) => props.theme.PrimaryHighlight.color};
`;
