import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import fetchData from '../fetchData';
import Collection from './Collection';
import "./Collections.css";

const Collections = () => {
  const result = useQuery(['data'], fetchData);
  const products = result?.data?.data?.main ?? [];
  const category = useParams();


  return (
    <>
      <Collection props={products} category={category} />
    </>
  );
};

export default Collections;
