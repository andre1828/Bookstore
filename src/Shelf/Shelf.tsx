import { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

// const ShelfContainer = styled.div`
//   background-color: aquamarine;
//   display: flex;
//   overflow-x: scroll;
//   &::-webkit-scrollbar {
//     display: none;
//   }
//   // firefox
//   scrollbar-width: none;
// `;

// const NavigationButton = styled.button`
//   border-radius: 50%;
//   width: 50px;
//   height: 50px;
//   border-style: none;
//   background-color: #f1f7fc;
// `;

interface ShelfProps {
  children: JSX.Element[];
}

// temporary slider implementation
const SliderWrapper = styled.section`
  margin: 1rem;
  position: relative;
  overflow: hidden;
`;

const SlideContainer = styled.ul`
  /* height: calc(100vh - 2rem); */
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
  top: 0;
  bottom: 0;
  margin: auto;
  height: 4rem;
  background-color: aquamarine;
  border: none;
  width: 2rem;
  font-size: 3rem;
  padding: 0;
  cursor: pointer;
  transition: opacity 100ms;
`;

const LeftSlideButton = styled(SlideButton)`
  left: 0;
  padding-left: 0.25rem;
  border-radius: 0 2rem 2rem 0;
`;

const RightSlideButton = styled(SlideButton)`
  right: 0;
  padding-left: 0.75rem;
  border-radius: 2rem 0 0 2rem;
`;

const Shelf = ({ children /*, showNavigation*/ }: ShelfProps) => {
  const sliderRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);

  const handleRightButtonClick = useCallback(() => {
    console.log('right button clicked');

    sliderRef.current.scrollLeft += 100;
    setShowLeftButton(true);
  }, []);

  const handleLeftButtonClick = useCallback(() => {
    sliderRef.current.scrollLeft -= 100;

    if (sliderRef.current.scrollLeft <= 0) {
      setShowLeftButton(false);
    }
  }, []);

  return (
    <SliderWrapper id="slider">
      {showLeftButton && <LeftSlideButton onClick={handleLeftButtonClick}> &#8249;</LeftSlideButton>}
      <RightSlideButton onClick={handleRightButtonClick}> &#8250;</RightSlideButton>
      <SlideContainer ref={sliderRef}>{children}</SlideContainer>
    </SliderWrapper>
  );
};

export default Shelf;
