import { memo, VFC } from "react";
import styled from "styled-components";

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  padding: 8px 0;
`;

export const Header: VFC = memo(() => {
  return <SHeader>てすと</SHeader>;
});
