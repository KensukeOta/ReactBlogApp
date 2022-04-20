import type { FC } from "react";
import type { Props } from "../../types/Props";
import { Footer } from "../organisms/Footer"
import { Header } from "../organisms/Header"

export const DefaultLayout: FC<Props> = (props) => {
  return (
    <>
      <Header />
        {props.children}
      <Footer />
    </>
  );
};