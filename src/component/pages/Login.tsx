import { ChangeEvent, memo, useState, VFC } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useLoginUser } from "../../hooks/useLoginUser";
import { Get_User } from "../../types/api/Get_User";
import { Loading } from "../atoms/Loading";

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
  const { setLoginUser } = useLoginUser();
  const [userId, setUserid] = useState<string>("user000004");
  const [passWord, setPassWord] = useState<string>("passwordpassword");
  const [isLoading, setIsLoading] = useState(false);

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserid(e.target.value);
  };

  const onChangePassWord = (e: ChangeEvent<HTMLInputElement>) => {
    setPassWord(e.target.value);
  };

  const getLoginUser = () => {
    axios
      .get<Get_User>(
        `https://kintaiwebapi.azurewebsites.net/api/user/${userId}`
      )
      .then((res) => {
        const { UserInfo } = res.data;
        setLoginUser(UserInfo);
      })
      .catch((err) => {
        console.log(err);
        alert("err");
      });
  };

  const onClickLogin = () => {
    setIsLoading(true);
    axios
      .post("https://kintaiwebapi.azurewebsites.net/api/login", {
        userid: userId,
        passWord: passWord,
        userType: "0"
      })
      .then((res) => {
        getLoginUser();
        setIsLoading(false);
        //alert("?????????????????????");
        history.push("/home");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        alert("???????????????????????????????????????");
      });
  };

  return (
    <>
      {isLoading === true ? <Loading /> : ""}
      <SBody>
        <STitle>?????????!??????</STitle>
        <hr />
        <SItemBox>
          <SInputLabel>?????????ID</SInputLabel>
          <SInput
            placeholder="????????????ID"
            value={userId}
            onChange={onChangeUserId}
          />
        </SItemBox>
        <SItemBox>
          <SInputLabel>???????????????</SInputLabel>
          <SInput
            type="password"
            placeholder="???????????????"
            value={passWord}
            onChange={onChangePassWord}
          />
        </SItemBox>
        <SItemBox>
          <PrimaryButton onClick={onClickLogin}>????????????</PrimaryButton>
        </SItemBox>
      </SBody>
    </>
  );
});
