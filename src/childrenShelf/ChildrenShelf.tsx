import Shelf from 'src/shelf';
import useSWR from 'swr';
import { childrenBooksUrl, fetcher } from 'src/services/booksService';
import { booksFromJson } from 'src/utils';

const ChildrenShelf = () => {
  const { data, error, isLoading } = useSWR(childrenBooksUrl, fetcher);
  if (isLoading) {
    return <p>carregando livros infantis...</p>;
  }
  if (error) {
    return <p>erro ao carregar livros infantis</p>;
  }
  return <Shelf title="Infantil">{booksFromJson(data)}</Shelf>;
};

export default ChildrenShelf;
