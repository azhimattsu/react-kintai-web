import { UserGetInteractor } from "./users/userGetUsecase";
import { UserDriverImpl } from "../domain/driver/userdriver";
import { UserGateway } from "../domain/repository/userrepository";

import { useUserGetUseCase, UserGetAtom } from "../hooks/useUserGetUsecase";
import { useRecoilState } from "recoil";

const [userUseCase, setUserUseCase] = useRecoilState(UserGetAtom);
