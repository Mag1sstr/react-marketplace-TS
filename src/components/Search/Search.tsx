import styles from "./style.module.css";
import searchImage from "../../images/search.png";

interface IProps {
  searchValue: string;
  setSearchValue: (str: string) => void;
}

export default function Search({ searchValue, setSearchValue }: IProps) {
  return (
    <div>
      <div className={styles.search}>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={styles.input}
          type="text"
          placeholder="Search by keywords..."
        />
        <img className={styles.image} src={searchImage} alt="" />
      </div>
    </div>
  );
}
