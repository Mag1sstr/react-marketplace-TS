import axios from "axios";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import { IProducts } from "../../interfaces/interfaces";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";
import Pagination from "../Pagination/Pagination";
import FindByPrice from "../FindByPrice/FindByPrice";
import Search from "../Search/Search";

export default function Products() {
  const [data, setData] = useState<IProducts[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const productCount = 12;
  const firstProductIndex = productCount * currentPage - productCount;
  const lastProductIndex = firstProductIndex + productCount;
  const totalPage = Math.ceil(Number(data?.length) / productCount);

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products").then((resp) => {
      setData(resp.data);
    });
  }, []);

  if (!data) {
    return <Spinner />;
  }

  return (
    <section>
      <div className="flex">
        <FindByPrice setData={setData} />
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className={styles.row}>
        {data
          .slice(firstProductIndex, lastProductIndex)
          .filter((c) =>
            c.title
              .toLowerCase()
              .trim()
              .includes(searchValue.toLowerCase().trim())
          )
          .map((item) => {
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
      <Pagination totalPage={totalPage} setCurrentPage={setCurrentPage} />
    </section>
  );
}
