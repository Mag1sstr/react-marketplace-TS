import { useEffect, useState } from "react";
import { IProducts } from "../../interfaces/interfaces";
import axios from "axios";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";
import Categories from "../Categories/Categories";
import Pagination from "../Pagination/Pagination";

export default function MainPage() {
  const [data, setData] = useState<IProducts[] | null>(null);
  const countCards = 12;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(countCards);
  const totalPage = Math.ceil(Number(data?.length) / countCards);
  console.log(totalPage);

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products").then((resp) => {
      setData(resp.data);
    });
  }, []);
  if (!data) {
    return <Spinner />;
  }
  return (
    <div className="main">
      <div className="conteiner">
        <Categories />
        <div className="row">
          {data &&
            data.slice(startIndex, endIndex).map((item) => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  images={item.images}
                />
              );
            })}
        </div>
        <Pagination
          totalPage={totalPage}
          setStartIndex={setStartIndex}
          setEndIndex={setEndIndex}
        />
      </div>
    </div>
  );
}
