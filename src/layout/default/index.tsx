import Footer from "./footer";
import Header from "./header";
import { StyledLayout } from "./styled";
import useInitialize from "./useInitialize";

export default function DefaultLayout({ children }) {
  useInitialize();

  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
}
