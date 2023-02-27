import styled from 'styled-components';
import useScreenSize from '../hooks/useScreenSize';
import { Container as Button } from 'src/button';

const FooterWrapper = styled.footer.attrs((props) => {
  switch (props.screenSize) {
    case 'small':
      return { justifyContent: 'center', height: '76px' };
    case 'medium':
      return { justifyContent: 'space-between', height: '82px' };
    case 'large':
      return { justifyContent: 'space-between', height: '100px' };
  }
})`
  width: 100%;
  height: ${(props) => props.height};
  position: fixed;
  bottom: 0;
  border: 0.5px solid #d9d9d9;
  background-color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: ${(props) => props.justifyContent};
`;

const Copyright = styled.p.attrs((props) => {
  switch (props.screenSize) {
    case 'medium':
      return { marginLeft: '9%' };
    case 'large':
      return { marginLeft: '16%' };
  }
})`
  font-weight: ${(props) => props.theme.Copyright.fontWeight};
  font-size: ${(props) => props.theme.Copyright.fontSize};
  color: ${(props) => props.theme.Copyright.color};
  margin-left: ${(props) => props.marginLeft};
  align-self: center;
`;

const ButtonContainer = styled.div.attrs((props) => {
  switch (props.screenSize) {
    case 'large':
      return { marginRight: '16%' };
  }
})`
  display: flex;
  align-items: center;
  margin-right: ${(props) => props.marginRight};
`;

const PrivacyPolicyText = styled.p`
  width: 200px;
`;

const HelpButton = styled(Button)`
  margin-left: 14px;
  margin-right: 76px;
`;

const HelpText = styled.p`
  width: 76px;
`;

const Footer = () => {
  const screenSize = useScreenSize();
  const isSmall = screenSize === 'small';
  const isLarge = screenSize === 'large';

  return (
    <FooterWrapper screenSize={screenSize}>
      <Copyright screenSize={screenSize}>
        Copyright © 2021 Árvore.
        {!isLarge && <br />} Todos os direitos reservados.
      </Copyright>
      {!isSmall && (
        <>
          <ButtonContainer screenSize={screenSize}>
            <Button>
              <PrivacyPolicyText>Política de privacidade</PrivacyPolicyText>
            </Button>
            <HelpButton>
              <HelpText>Ajuda</HelpText>
            </HelpButton>
          </ButtonContainer>
        </>
      )}
    </FooterWrapper>
  );
};

export default Footer;
