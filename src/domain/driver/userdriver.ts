import axios from "axios";
import {
  UserDriver,
  UserModel,
  AllUserModel
} from "../interface/driver/userdriver";

export class UserDriverImpl implements UserDriver {
  find(userid: string): Promise<UserModel | null> {
    axios
      .get<UserModel>(
        `https://kintaiwebapi.azurewebsites.net/api/user/${userId}`
      )
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
    return null;
  }

  getAll(): Promise<AllUserModel | null> {
    axios
      .get<AllUserModel>("https://kintaiwebapi.azurewebsites.net/api/user")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
    return null;
  }
}
