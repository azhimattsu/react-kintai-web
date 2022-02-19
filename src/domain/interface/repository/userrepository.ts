import { User } from "../../entity/user";

export interface UserReporitory {
  getAll(): Promise<User[]>;
  get(userid: string): Promise<User>;
}
