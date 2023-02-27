import styled from 'styled-components';

export const Container = styled.div.attrs((props) => {
  if (props.variant === 'primary') {
    return {
      backgroundColor: '#8553f4',
      color: '#ffffff'
    };
  }

  if (props.variant === 'secondary') {
    return {
      backgroundColor: '#ADB7BF',
      color: '#ffffff',
      border: '1px solid #97A8B0'
    };
  }

  return {
    backgroundColor: '#ffffff',
    color: '#b2b4b9',
    border: '1px solid #b2b4b9'
  };
})`
  width: 90%;
  height: 55px;
  background-color: ${(props) => props.backgroundColor};
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  border-radius: 10px;

  display: flex;
  align-content: baseline;
  justify-content: center;
  flex-wrap: wrap;
`;

const LeftIcon = styled.img`
  width: 13px;
  padding-right: 5px;
`;

const RightIcon = styled.img`
  width: 13px;
  padding-left: 5px;
`;

interface ButtonProps {
  children: string;
  variant?: 'primary' | 'secondary';
  leftIcon?: string;
  rightIcon?: string;
}

const Button = ({ children, variant, leftIcon, rightIcon }: ButtonProps) => {
  return (
    <Container role="button" variant={variant}>
      {leftIcon && <LeftIcon src={leftIcon} />}
      {children}
      {rightIcon && <RightIcon src={rightIcon} />}
    </Container>
  );
};

export default Button;
