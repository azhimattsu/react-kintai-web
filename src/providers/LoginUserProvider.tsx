import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";
import { UserInfo } from "../types/api/UserInfo";

export type LoginUserContextType = {
  loginUser: UserInfo | null;
  setLoginUser: Dispatch<SetStateAction<UserInfo | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (Props: { children: ReactNode }) => {
  const { children } = Props;
  const [loginUser, setLoginUser] = useState<UserInfo | null>(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
