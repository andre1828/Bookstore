import useSWR from 'swr';
import Shelf from 'src/shelf';
import { highlightedBooksUrl, fetcher } from 'src/services/booksService';
import { booksFromJson } from 'src/utils';

const HighlightsShelf = () => {
  const { data, error, isLoading } = useSWR(highlightedBooksUrl, fetcher);
  if (isLoading) {
    return <p>carregando livros em destaque...</p>;
  }
  if (error) {
    return <p>erro ao carregar livros em destaque</p>;
  }
  return (
    <Shelf title="Destaques" isHighlighted>
      {booksFromJson(data)}
    </Shelf>
  );
};

export default HighlightsShelf;
