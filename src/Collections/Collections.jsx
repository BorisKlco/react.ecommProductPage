import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import fetchData from '../fetchData';

const Collections = () => {
  const result = useQuery(['data'], fetchData);
  const catergory = useParams();

  console.log(result);

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
