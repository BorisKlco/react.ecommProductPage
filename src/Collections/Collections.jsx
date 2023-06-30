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
      <div className="collection">
        <img
          src="https://img01.ztat.net/banner/8bdcd3b95d5248908e4e0a1122b6df31/bc8485fb42a74d03a4f667a373d2d152.jpg"
          alt=""
        />
      </div>
      <div className="collection">
        <img
          src="https://img01.ztat.net/banner/3b3ee2d45ec44ebca184ed7ab8a31ce3/d04af32b4bb647fea4e2af4db1e140bd.jpg"
          alt=""
        />
      </div>
      <div className="collection kids">
        <img
          src="https://img01.ztat.net/banner/84090e6b29074e27b26658ee389bc935/dd3cf8f395aa4829a2e5a762281c6f02.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Collections;
