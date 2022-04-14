import { Footer } from "../organisms/Footer"
import { Header } from "../organisms/Header"

export const DefaultLayout = (props: any) => {
  return (
    <>
      <Header />
        {props.children}
      <Footer />
    </>
  );
};