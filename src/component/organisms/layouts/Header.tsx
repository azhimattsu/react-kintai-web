import { memo, VFC } from "react";
import styled from "styled-components";
import { useLoginUser } from "../../../hooks/useLoginUser";
import logoimg from "../../../icons/logo.png";

const SHeader = styled.header`
  vertical-align: "center";
  background-color: #11999e;
  color: white;
  padding: 16px;
`;

const SLogoImg = styled.img`
  width: 32px;
  height: 32px;
`;

const SNav = styled.nav`
  position: fixed;
  text-align: right;
  top: 0;
  right: 0px;
  width: 100%;
`;
const SUl = styled.ul`
  display: inline-block;
  padding: 10px;
`;
const Sli = styled.ul`
  display: inline-block;
  font-size: 16px;
  padding: 10px;
`;
export const Header: VFC = memo(() => {
  const { loginUser } = useLoginUser();

  return (
    <>
      <SHeader>
        ジオる!勤怠 ログインユーザ：
        {`${loginUser?.LastName} ${loginUser?.FirstName}`}
        <SNav>
          <SUl>
            <Sli>
              <a href="">出勤簿</a>
            </Sli>
            <Sli>
              <a href="">ログアウト</a>
            </Sli>
          </SUl>
        </SNav>
      </SHeader>
    </>
  );
});
