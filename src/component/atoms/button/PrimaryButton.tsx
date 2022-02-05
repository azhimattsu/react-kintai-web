import { memo, ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

const SButton = styled.button`
  color: white;
  background-color: #2e8b57;
  padding-top: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 4px;
  border-radius: 4px;
`;

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
});
