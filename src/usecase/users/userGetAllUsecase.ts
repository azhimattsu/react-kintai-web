import { UserReporitory } from "../../domain/interface/repository/userrepository";
import { UserEntity } from "./userEntity";

export type UserGetAllUsecaseCommand = {
  userid: string;
};

export type UserGetAllUsecaseResult = {
  userlist: Array<UserEntity>;
};

export default interface UserGetAllUsecase {
  execute(): Promise<UserGetAllUsecaseResult>;
}

export class UserGetAllInteractor implements UserGetAllUsecase {
  userRepo: UserReporitory;

  public constructor(userRepo: UserReporitory) {
    this.userRepo = userRepo;
  }

  public async execute(): Promise<UserGetAllUsecaseResult> {
    const res = await this.userRepo.getAll();
    if (!res) {
      throw new Error("error");
    }
    const userlist = res.map(
      (n) => new UserEntity(n.UserId, n.LastName, n.FirstName, n.UserType)
    );
    return { userlist };
  }
}
