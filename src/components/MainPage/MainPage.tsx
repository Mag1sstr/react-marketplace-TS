// import Categories from "../Categories/Categories";

import { IContext, useTheme } from "../../contexts/ThemeContext";
import Products from "../Products/Products";

export default function MainPage() {
  const { dark }: IContext = useTheme();

  return (
    <div className={`main ${dark ? "dark" : ""}`}>
      <div className="conteiner">
        {/* <Categories /> */}
        <Products />
      </div>
    </div>
  );
}
