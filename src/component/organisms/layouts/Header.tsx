import { memo, VFC } from "react";
import styled from "styled-components";
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

export const Header: VFC = memo(() => {
  return (
    <>
      <SHeader>ジオる!勤怠</SHeader>
    </>
  );
});
