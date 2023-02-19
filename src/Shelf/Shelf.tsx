import { useCallback, useRef } from 'react';
import styled from 'styled-components';
import rightArrowIcon from '../assets/right-arrow.svg';
import leftArrowIcon from '../assets/left-arrow.svg';
import { PrimaryMedium } from 'src/typography';

interface ShelfProps {
  title: string;
  isShowNavigation?: boolean;
  isHighlighted?: boolean;
  children: JSX.Element[];
}

const SliderWrapper = styled.article`
  width: 900px;
  position: relative;
  background-color: ${(props) => (props.isHighlighted ? props.theme.Highlight.backgroundColor : '')};
`;

const Title = styled(PrimaryMedium)`
  padding-top: 21px;
  margin-left: 17px;
  font-size: ${(props) =>
    props.isHighlighted ? props.theme.PrimaryHighlight.fontSize : props.theme.PrimaryMedium.fontSize};
  color: ${(props) => (props.isHighlighted ? props.theme.PrimaryHighlight.color : props.theme.PrimaryMedium.color)};
`;

const SlideContainer = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SlideButton = styled.button`
  position: absolute;
  display: flex;
  top: -50px;
  bottom: 0;
  margin: auto;
  width: 35px;
  height: 35px;
  background-color: #ffffff;
  border: 1px solid #f1f7fc;
  font-size: 3rem;
  padding: 0;
  cursor: pointer;
  transition: opacity 100ms;
`;

const LeftSlideButton = styled(SlideButton)`
  left: -16px;
  padding-left: 0.75rem;
  border-radius: 50%;
`;

const RightSlideButton = styled(SlideButton)`
  right: -16px;
  padding-left: 0.75rem;
  border-radius: 50%;
`;

const ButtonIcon = styled.img`
  align-self: center;
`;

const Shelf = ({ title, isShowNavigation = false, isHighlighted = false, children }: ShelfProps) => {
  const sliderRef = useRef(null);
  const scrollAmount = 200;
  // const [canScrollLeft, setCanScrollLeft] = useState(false);
  // const [canScrollRight, setCanScrollRight] = useState(true);

  const showLeftButton = isShowNavigation;
  const showRightButton = isShowNavigation;

  const handleRightButtonClick = useCallback(() => {
    sliderRef.current.scrollLeft += scrollAmount;

    if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth) {
      setCanScrollRight(false);
    }
  }, []);

  const handleLeftButtonClick = useCallback(() => {
    sliderRef.current.scrollLeft -= scrollAmount;

    if (sliderRef.current.scrollLeft <= 0) {
      setCanScrollLeft(false);
    }
  }, []);

  return (
    <SliderWrapper isHighlighted={isHighlighted}>
      <Title isHighlighted={isHighlighted}>{title}</Title>
      {showLeftButton && (
        <LeftSlideButton onClick={handleLeftButtonClick}>
          <ButtonIcon src={leftArrowIcon} />{' '}
        </LeftSlideButton>
      )}
      {showRightButton && (
        <RightSlideButton onClick={handleRightButtonClick}>
          <ButtonIcon src={rightArrowIcon} alt="" />
        </RightSlideButton>
      )}

      <SlideContainer ref={sliderRef}>{children}</SlideContainer>
    </SliderWrapper>
  );
};

export default Shelf;
