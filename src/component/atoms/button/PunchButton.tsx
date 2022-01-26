import { memo, ReactNode, VFC } from "react";
import styled from "styled-components";

const SButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
  font-size: 4em;
  padding: 0.1em 0.1em;
  text-decoration: none;
  color: #00bcd4;
  background: #ececec;
  transition: 0.4s;
  width: 160px;
  height: 160px;

  :hover {
    background: #00bcd4;
    color: white;
    cursor: pointer;
  }
`;

const SItem = styled.div`
  text-align: center;
  vertical-align: middle;
  margin: 2px;
  padding: 1px;
`;
const SImg = styled.img`
  width: 48px;
`;

type Props = {
  children: ReactNode;
  src: string;
  onClick: () => void;
};

export const PunchButton: VFC<Props> = memo((props) => {
  const { children, src, onClick } = props;
  return (
    <>
      <SButton onClick={onClick}>
        <SItem>
          <SImg src={src} alt="" />
        </SItem>
        <SItem>{children}</SItem>
      </SButton>
    </>
  );
});
