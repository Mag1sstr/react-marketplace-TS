import styles from "./style.module.css";
import { useState } from "react";
import axios from "axios";
import { IProducts } from "../../interfaces/interfaces";
import { useTranslation } from "react-i18next";

interface IProps {
  setData: (products: IProducts[]) => void;
}

interface IValue {
  start: any;
  end: any;
}

export default function FindByPrice({ setData }: IProps) {
  const [value, setValue] = useState<IValue>({
    start: "",
    end: "",
  });
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <p style={{ fontWeight: 600 }}>{t("price")}:</p>
        <span>
          {t("from")}{" "}
          <input
            value={value.start}
            onChange={(e) =>
              e.target.value == Number(e.target.value)
                ? setValue({ ...value, start: e.target.value })
                : null
            }
            className={styles.input}
            type="text"
          />{" "}
          {t("to")}{" "}
          <input
            value={value.end}
            onChange={(e) =>
              e.target.value == Number(e.target.value)
                ? setValue({ ...value, end: e.target.value })
                : null
            }
            className={styles.input}
            type="text"
          />{" "}
          <button
            onClick={() => {
              axios
                .get(
                  `https://api.escuelajs.co/api/v1/products/?price_min=${value.start}&price_max=${value.end}`
                )
                .then((resp) => {
                  setData(resp.data);
                });
            }}
            className={`${styles.btn} ${
              value.start.length && value.end.length ? styles.active : ""
            }`}
          >
            {t("find")}
          </button>
        </span>
      </div>
    </div>
  );
}
