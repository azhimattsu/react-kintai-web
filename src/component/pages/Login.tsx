import { ChangeEvent, memo, useState, VFC } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import axios from "axios";

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const SBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 30%;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 3px 6px;
`;

type loginResult = {
  response: string;
};

export const Login: VFC = memo(() => {
  const [userId, setUserid] = useState<string>("");
  const [passWord, setPassWord] = useState<string>("");
  const [logintype, setLoginType] = useState<string>("general");
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserid(e.target.value);
  };

  const onChangePassWord = (e: ChangeEvent<HTMLInputElement>) => {
    setPassWord(e.target.value);
  };

  const onChangeLoginType = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginType(e.target.value);
  };

  const onClickLogin = () => {
    /*
    axios
      .get<[]>(
        "https://kintaiwebapi.azurewebsites.net/api/user/area/user000002"
      )
      .then((res) => {
        console.log(res);
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("err");
      });
*/
    /*
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        console.log(res);
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("err");
      });
*/
    /*
    axios
      .get("https://kintaiwebapi.azurewebsites.net/api/servertime")
      .then((res) => {
        console.log(res);
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("err");
      });
*/

    axios
      .post("https://kintaiwebapi.azurewebsites.net/api/login", {
        userid: "user000001",
        passWord: "passwordpassword",
        userType: "1"
      })
      .then((res) => {
        console.log(res);
        alert("ログイン成功！");
      })
      .catch((err) => {
        console.log(err);
        alert("ログインできませんでした。");
      });
  };

  return (
    <SContainer>
      <SBox>
        <input
          placeholder="ユーザーID"
          value={userId}
          onChange={onChangeUserId}
        />
        <input
          placeholder="パスワード"
          value={passWord}
          onChange={onChangePassWord}
        />
        <label key="general">
          <input
            type="radio"
            name="logintype"
            value="general"
            checked={logintype === "general"}
            onChange={onChangeLoginType}
          />
          一般
        </label>
        <label key="manager">
          <input
            type="radio"
            name="logintype"
            value="manager"
            checked={logintype === "manager"}
            onChange={onChangeLoginType}
          />
          管理者
        </label>
        <PrimaryButton onClick={onClickLogin}>ログイン</PrimaryButton>
      </SBox>
    </SContainer>
  );
});
