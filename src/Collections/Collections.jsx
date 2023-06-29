import { useParams } from 'react-router-dom';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';

const Collections = () => {
  const catergory = useParams();

  console.log(catergory);
  return (
    <>
      {catergory.id == 'men' ? (
        <Men />
      ) : catergory.id == 'women' ? (
        <Women />
      ) : catergory.id == 'kids' ? (
        <Kids />
      ) : (
        <h1>This is Collections</h1>
      )}
    </>
  );
};

export default Collections;
