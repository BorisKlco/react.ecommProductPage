import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchData from "../fetchData";
import Collection from "./Collection";
import "./Collections.css";

const Collections = () => {
  const result = useQuery(["data"], fetchData);
  const products = result?.data?.data?.main ?? [];
  const category = useParams();

  if (category.id) return <Collection props={products} category={category} />;

  return (
    <div className="collections">
      <h1>This is Collections</h1>
    </div>
  );
};

export default Collections;
