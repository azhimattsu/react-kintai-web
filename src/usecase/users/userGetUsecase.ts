import { UserReporitory } from "../../domain/interface/repository/userrepository";
import { UserEntity } from "./userEntity";

export type UserGetUsecaseCommand = {
  userid: string;
};

export type UserGetUsecaseResult = {
  user: UserEntity;
};

export default interface UserGetUsecase {
  execute(command: UserGetUsecaseCommand): Promise<UserGetUsecaseResult>;
}

export class UserGetInteractor implements UserGetUsecase {
  userRepo: UserReporitory;

  public constructor(userRepo: UserReporitory) {
    this.userRepo = userRepo;
  }

  public async execute(
    command: UserGetUsecaseCommand
  ): Promise<UserGetUsecaseResult> {
    const res = await this.userRepo.get(command.userid);
    if (!res) {
      throw new Error("error");
    }
    const userEntity = new UserEntity(
      res.UserId,
      res.LastName,
      res.FirstName,
      res.UserType
    );
    return {
      user: userEntity
    };
  }
}
