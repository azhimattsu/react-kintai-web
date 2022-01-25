import { memo, ReactNode, VFC } from "react";
import styled from "styled-components";
import punch from "../../../icons/logo.png";
type Props = {
  children: ReactNode;
  src: string;
  onClick: () => void;
};

const SButton = styled.div`
  position: relative;
  font-weight: bold;
  font-size: 4em;
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: #00bcd4;
  background: #ececec;
  transition: 0.4s;
  width: 200px;
  height: 200px;

  :hover {
    background: #00bcd4;
    color: white;
    cursor: pointer;
  }
`;

const SImg = styled.img`
  width: 64px;
`;
export const PunchButton: VFC<Props> = memo((props) => {
  const { children, onClick } = props;
  return (
    <>
      <SButton onClick={onClick}>
        <SImg src={punch} alt="" />
        <br />
        {children}
      </SButton>
    </>
  );
});
