import axios from "axios";
import {
  UserDriver,
  UserModel,
  AllUserModel
} from "../interface/driver/userdriver";

export class UserDriverImpl implements UserDriver {
  public async find(userid: string): Promise<UserModel | null> {
    try {
      const res = await axios.get<UserModel>(
        `https://kintaiwebapi.azurewebsites.net/api/user/${userid}`
      );
      return res.data;
    } catch (e) {
      if (axios.isAxiosError(e) && e.response && e.response.status === 400)
        console.log(e);
      return null;
    }
  }

  public async getAll(): Promise<AllUserModel | null> {
    try {
      const res = await axios.get<AllUserModel>(
        `https://kintaiwebapi.azurewebsites.net/api/user`
      );
      return res.data;
    } catch (e) {
      if (axios.isAxiosError(e) && e.response && e.response.status === 400)
        console.log(e);
      return null;
    }
    /*
    await axios
      .get<AllUserModel>("https://kintaiwebapi.azurewebsites.net/api/user")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
    return null;
*/
  }
}
