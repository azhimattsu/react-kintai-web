import { ChangeEvent, memo, useState, VFC } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SBody = styled.div`
  width: 400px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #555;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 3px 6px;
`;

const STitle = styled.p`
  font-size: 14px;
  text-align: center;
`;

const SItemBox = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  text-align: center;
`;

const SInput = styled.input`
  width: 300px;
  padding: 4px;
  font-size: 14px;
`;

export const Login: VFC = memo(() => {
  const history = useHistory();
  const [userId, setUserid] = useState<string>("");
  const [passWord, setPassWord] = useState<string>("");
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserid(e.target.value);
  };

  const onChangePassWord = (e: ChangeEvent<HTMLInputElement>) => {
    setPassWord(e.target.value);
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
        //alert("ログイン成功！");
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
        alert("ログインできませんでした。");
      });
  };

  return (
    <>
      <SBody>
        <STitle>ログイン</STitle>
        <hr />
        <SItemBox>
          <SInput
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
        </SItemBox>
        <SItemBox>
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
