import Shelf from 'src/shelf';
import useSWR from 'swr';
import { adventureBooksUrl, fetcher } from 'src/services/booksService';
import { booksFromJson } from 'src/utils';

const AdventureShelf = () => {
  const { data, error, isLoading } = useSWR(adventureBooksUrl, fetcher);

  if (isLoading) {
    return <p>carregando livros de aventura...</p>;
  }

  if (error) {
    return <p>erro ao carregar livros de aventura</p>;
  }

  return <Shelf title="Aventura">{booksFromJson(data)}</Shelf>;
};

export default AdventureShelf;
