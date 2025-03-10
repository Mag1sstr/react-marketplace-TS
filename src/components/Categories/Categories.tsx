import { useEffect, useState } from "react";
import styles from "./style.module.css";
import axios from "axios";
import CategoryCard from "../CategoryCard/CategoryCard";
import { ICategory } from "../../interfaces/interfaces";
import { useTranslation } from "react-i18next";

export default function Categories() {
  const [categories, setCategories] = useState<ICategory[] | null>(null);
  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/categories").then((resp) => {
      setCategories(resp.data);
    });
  }, []);

  const { t } = useTranslation();

  return (
    <div className="conteiner">
      <h1 className={styles.title}>{t("categories")}</h1>
      <section className={styles.categories}>
        {categories?.map((item) => {
          return (
            <CategoryCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
            />
          );
        })}
      </section>
    </div>
  );
}
