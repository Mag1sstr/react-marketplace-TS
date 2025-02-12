import axios, { AxiosHeaders } from "axios";
import { createContext, useEffect, useState } from "react";
import { IUser } from "../interfaces/interfaces";
interface IProps {
  children: React.ReactNode;
}
interface IContext {
  token: string | null;
  user: IUser | null;
  signIn: (login: symbol, pass: string) => void;
  error: boolean;
  setUser: (obj: null) => void;
  setToken: (str: string | null) => void;
}

export const AuthContext = createContext<IContext>({} as IContext);

export default function AuthContextProvider({ children }: IProps) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      axios.get("https://api.escuelajs.co/api/v1/auth/profile").then((resp) => {
        console.log(resp.data);
        setUser(resp.data);
      });
    }
  }, [token]);

  function signIn(login: symbol, pass: string) {
    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", {
        email: login,
        password: pass,
      })
      .then((resp) => {
        setToken(resp.data.access_token);
        localStorage.setItem("token", resp.data.access_token);
      })
      .catch(() => {
        setError(true);
      });
  }

  console.log(token);

  return (
    <AuthContext.Provider
      value={{ token, user, signIn, error, setUser, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
}
