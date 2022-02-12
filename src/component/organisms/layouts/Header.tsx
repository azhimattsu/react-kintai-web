import { memo, VFC } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useLoginUser } from "../../../hooks/useLoginUser";
import logoimg from "../../../icons/logo.png";

const SHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: #11999e;
`;

const STitle = styled.div`
  padding: 10px;
  flex-grow: 5;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
const SUserLabel = styled.div`
  padding: 10px;
  flex-grow: 2;
  color: white;
`;
const SNavItem = styled.div`
  padding: 10px;
  color: white;
  flex-grow: 1;
`;

const SA = styled.a`
  text-decoration: none;
  transition: color 0.3s;
  :hover {
    color: #ff7043;
  }
`;

const SLogoImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const Header: VFC = memo(() => {
  const { loginUser } = useLoginUser();
  const history = useHistory();

  const onClickAttendanceBook = () => {
    history.push("/home/attendance_book");
  };
  const onClickPunch = () => {
    history.push("/home");
  };
  const onClickLogout = () => {
    history.push("/");
  };

  return (
    <>
      <SHeader>
        <STitle>ジオる!勤怠</STitle>
        <SUserLabel>
          {loginUser?.LastName &&
            `ログインユーザ： ${loginUser?.LastName} ${loginUser?.FirstName}`}
        </SUserLabel>
        <SNavItem>
          <SA href="#" onClick={onClickPunch}>
            打刻
          </SA>
        </SNavItem>
        <SNavItem>
          <SA href="#" onClick={onClickAttendanceBook}>
            出勤簿
          </SA>
        </SNavItem>
        <SNavItem>
          <SA href="#" onClick={onClickLogout}>
            ログアウト
          </SA>
        </SNavItem>
      </SHeader>
    </>
  );
});
