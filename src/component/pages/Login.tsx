import { ChangeEvent, memo, useState, VFC } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useLoginUser } from "../../hooks/useLoginUser";
import { UserInfo } from "../../types/api/UserInfo";

const SBody = styled.div`
  width: 400px;
  margin: 200px auto;
  padding: 20px;
  border: 1px solid #555;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 3px 6px;
`;

const STitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const SItemBox = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  text-align: left;
`;

const SInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 4px;
  font-size: 14px;
`;
const SInputLabel = styled.p`
  font-size: 14px;
  text-align: left;
`;

export const Login: VFC = memo(() => {
  const history = useHistory();
  const { loginuser, setLoginUser } = useLoginUser();
  const [userId, setUserid] = useState<string>("");
  const [passWord, setPassWord] = useState<string>("");
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserid(e.target.value);
  };

  const onChangePassWord = (e: ChangeEvent<HTMLInputElement>) => {
    setPassWord(e.target.value);
  };

  const getLoginUser = () => {
    axios
      .get<UserInfo>(
        `https://kintaiwebapi.azurewebsites.net/api/user/user000002`
      )
      .then((res) => {
        console.log(res.data);
        setLoginUser(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("err");
      });
  };

  const onClickLogin = () => {
    axios
      .post("https://kintaiwebapi.azurewebsites.net/api/login", {
        userid: "user000002",
        passWord: "passwordpassword",
        userType: "1"
      })
      .then((res) => {
        console.log(res);
        getLoginUser();
        //alert("ログイン成功！");
        //        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
        alert("ログインできませんでした。");
      });
  };

  return (
    <>
      <SBody>
        <STitle>ジオる!勤怠</STitle>
        <hr />
        <SItemBox>
          <SInputLabel>ユーザID</SInputLabel>
          {console.log(loginuser)}
          <SInput
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
        </SItemBox>
        <SItemBox>
          <SInputLabel>パスワード</SInputLabel>
          <SInput
            placeholder="パスワード"
            value={passWord}
            onChange={onChangePassWord}
          />
        </SItemBox>
        <SItemBox>
          <PrimaryButton onClick={onClickLogin}>ログイン</PrimaryButton>
        </SItemBox>
      </SBody>
    </>
  );
});
