import { createContext, useContext, useState } from "react";

interface IProps {
  children: React.ReactNode;
}
export interface IContext {
  dark: boolean;
  setDark: (bool: boolean) => void;
}
export const ThemeContext = createContext({} as IContext);

export default function ThemeContextProvider({ children }: IProps) {
  const [dark, setDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
