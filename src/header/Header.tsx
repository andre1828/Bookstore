import styled from 'styled-components';
import logo from 'src/assets/logo.svg';
import bellIcon from 'src/assets/bell.svg';
import avatar from 'src/assets/avatar.png';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  border-bottom: 1px solid #f1f7fc;
`;

const Logo = styled.img`
  height: 24px;
  margin-left: 16px;
`;

const Container = styled.div`
  margin-right: 16px;
`;

const NotificationIcon = styled.img`
  margin-right: 28px;
  margin-bottom: 3px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={logo} />
      <Container>
        <NotificationIcon src={bellIcon} alt="notifications" />
        <img src={avatar} alt="user" />
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
