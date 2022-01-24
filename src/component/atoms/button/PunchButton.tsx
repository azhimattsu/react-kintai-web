import { memo, ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  src: string;
  onClick: () => void;
};

const SButton = styled.div`
  position: relative;
  display: inline-block;
  font-weight: bold;
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: #00bcd4;
  background: #ececec;
  transition: 0.4s;
  :hover {
    background: #00bcd4;
    color: white;
    cursor: pointer;
  }
`;

export const PunchButton: VFC<Props> = memo((props) => {
  const { children, onClick } = props;
  return (
    <>
      <SButton onClick={onClick}>{children}</SButton>
    </>
  );
});
