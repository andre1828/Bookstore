import Shelf from 'src/shelf';
import useSWR from 'swr';
import { actionBooksUrl, fetcher } from 'src/services/booksService';
import { booksFromJson } from 'src/utils';

const ActionShelf = () => {
  const { data, error, isLoading } = useSWR(actionBooksUrl, fetcher);
  if (isLoading) {
    return <p>carregando livros de ação...</p>;
  }
  if (error) {
    return <p>erro ao carregar livros de ação</p>;
  }
  return <Shelf title="Ação">{booksFromJson(data)}</Shelf>;
};

export default ActionShelf;
