import { UserReporitory } from "../interface/repository/userrepository";
import { UserDriver } from "../interface/driver/userdriver";
import { User } from "../entity/user";

export class UserGateway implements UserReporitory {
  private store: UserDriver;

  public constructor(store: UserDriver) {
    this.store = store;
  }

  public async getAll(): Promise<User[]> {
    const res = await this.store.getAll();
    return res.AllUserInfos.map(
      (n) =>
        new User(
          n.UserId,
          n.PassWord,
          n.LastName,
          n.FirstName,
          n.UserType,
          n.CreatedUserId,
          n.CreateOn,
          n.UpdateUserId,
          n.UpdatedOn
        )
    );
  }
  public async get(userid: string): Promise<User> {
    const res = await this.store.find(userid);
    console.log("repo");
    console.log(res);
    const user = new User(
      res.UserInfo.UserId,
      res.UserInfo.PassWord,
      res.UserInfo.LastName,
      res.UserInfo.FirstName,
      res.UserInfo.UserType,
      res.UserInfo.CreatedUserId,
      res.UserInfo.CreateOn,
      res.UserInfo.UpdateUserId,
      res.UserInfo.UpdatedOn
    );
    return user;
  }
}
