import useMediaQuery from 'src/hooks/useMediaQuery';

function useScreenSize() {
  const isMedium = useMediaQuery('(min-width: 768px)');
  const isLarge = useMediaQuery('(min-width: 1680px)');

  if (isLarge) {
    return 'large';
  } else if (isMedium) {
    return 'medium';
  } else {
    return 'small';
  }
}

export default useScreenSize;
