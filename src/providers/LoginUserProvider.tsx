import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";
import { UserEntity } from "../usecase/users/userEntity";

export type LoginUserContextType = {
  loginUser: UserEntity | null;
  setLoginUser: Dispatch<SetStateAction<UserEntity | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>({
  loginUser: null,
  setLoginUser: () => {}
});

export const LoginUserProvider = (Props: { children: ReactNode }) => {
  const { children } = Props;
  const [loginUser, setLoginUser] = useState<UserEntity | null>(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
