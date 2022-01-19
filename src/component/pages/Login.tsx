import { memo, useState, VFC } from "react";
import styled from "styled-components";

export const Login: VFC = memo(() => {
  const [userId, setUserid] = useState<string>("");
  const [passWord, setPassWord] = useState<String>("");

  const SBox = styled.div`
    padding: 4px;
    border-radius: 4px;
    padding: 4px;
    background-color: white;
    box-shadow: 0 3px 6px;
    width: 50%;
  `;

  return (
    <SBox>
      <input placeholder="ユーザーID" />
      <input placeholder="パスワード" />
    </SBox>
  );
});
