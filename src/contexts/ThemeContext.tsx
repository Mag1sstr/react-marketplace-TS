import { createContext, useContext, useState } from "react";
import { ICart } from "../interfaces/interfaces";

interface IProps {
  children: React.ReactNode;
}
export interface IContext {
  dark: boolean;
  setDark: (bool: boolean) => void;
  cart: ICart[];
  setCart: (arr: ICart[]) => void;
}
export const ThemeContext = createContext({} as IContext);

export default function ThemeContextProvider({ children }: IProps) {
  const [dark, setDark] = useState(false);
  const [cart, setCart] = useState([]);
  return (
    <ThemeContext.Provider value={{ dark, setDark, cart, setCart }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
