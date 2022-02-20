import { atom, useRecoilValue } from "recoil";

import {
  UserGetInteractor,
  UserGetUsecaseCommand,
  UserGetUsecaseResult
} from "../usecase/users/userGetUsecase";

export const UserGetAtom = atom<UserGetInteractor | null>({
  key: "USER_GET",
  default: null
});

export const useUserGetUseCase = () => {
  const usecase = useRecoilValue(UserGetAtom);

  const userGet = async (
    command: UserGetUsecaseCommand
  ): Promise<UserGetUsecaseResult | null> => {
    if (usecase !== null) {
      return await usecase.execute(command);
    } else {
      return null;
    }
  };

  return { userGet };
};
