import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const DefaultLayout: VFC<Props> = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};
