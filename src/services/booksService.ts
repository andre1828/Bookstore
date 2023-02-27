export const adventureBooksUrl = 'https://www.googleapis.com/books/v1/volumes?q=aventura&startIndex=0&maxResults=15';
export const actionBooksUrl = 'https://www.googleapis.com/books/v1/volumes?q=acao&startIndex=0&maxResults=15';
export const highlightedBooksUrl = 'https://www.googleapis.com/books/v1/volumes?q=destaques&startIndex=0&maxResults=15';
export const childrenBooksUrl = 'https://www.googleapis.com/books/v1/volumes?q=infantil&startIndex=0&maxResults=15';

export const fetcher = async (url) => fetch(url).then((res) => res.json());
