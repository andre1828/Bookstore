import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  border: 0.5px solid #d9d9d9;
  background-color: #ffffff;
  text-align: center;
`;

const Copyright = styled.p`
  font-weight: ${(props) => props.theme.Copyright.fontWeight};
  font-size: ${(props) => props.theme.Copyright.fontSize};
  color: ${(props) => props.theme.Copyright.color};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Copyright>
        Copyright © 2021 Árvore.
        <br /> Todos os direitos reservados.
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
