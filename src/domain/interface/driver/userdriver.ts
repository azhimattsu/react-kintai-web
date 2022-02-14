import { User } from "../../entity/user";
export interface UserDriver {
  find(userid: string): Promise<UserModel | null>;
  getAll(): Promise<AllUserModel | null>;
}

export type UserModel = {
  UserInfo: User;
  ResultMsg: string;
  Exception: string;
};

export type AllUserModel = {
  AllUserInfos: Array<User>;
  ResultMsg: string;
  Exception: string;
};
