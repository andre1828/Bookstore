import styled from 'styled-components';
import { BodySmall, PrimarySmall } from 'src/typography';

const BookContainer = styled.div`
  max-width: ${(props) => (props.isLarge ? '36vw' : '18vw')};
  margin: ${(props) => (props.isLarge ? '22px' : '16px')};
`;

const BookCover = styled.img`
  width: fill-available;
  border-radius: 6px 12px 12px 6px;
`;

const BookTitle = styled(PrimarySmall)`
  margin: 9px 0px 6px 0px;
`;

const BookAuthor = styled(BodySmall)`
  margin: 0px;
`;

interface BookProps {
  cover: string;
  title: string;
  author: string;
  isCoverOnly?: boolean;
  isLarge?: boolean;
}

const Book = ({ cover, title, author, isCoverOnly = false, isLarge = false }: BookProps) => {
  return (
    <BookContainer isLarge={isLarge}>
      <BookCover src={cover} />
      {!isCoverOnly && (
        <>
          <BookTitle>{title}</BookTitle>
          <BookAuthor>{author}</BookAuthor>
        </>
      )}
    </BookContainer>
  );
};

export default Book;
