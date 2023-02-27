import AdventureShelf from 'src/adventureShelf';
import ActionShelf from 'src/actionShelf';
import HighlightsShelf from 'src/highlightsShelf';
import ChildrenShelf from 'src/childrenShelf';

const Bookcase = () => {
  return (
    <main>
      <AdventureShelf />
      <ActionShelf />
      <HighlightsShelf />
      <ChildrenShelf />
    </main>
  );
};

export default Bookcase;
