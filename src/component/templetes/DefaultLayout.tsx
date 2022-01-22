import { ReactNode, VFC } from "react";
import { Header } from "../organisms/layouts/Header";

type Props = {
  children: ReactNode;
};

export const DefaultLayout: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
