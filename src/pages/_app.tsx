import { AppProps } from "next/app";
import { Provider as NextAuthProvider } from "next-auth/react";

import "../styles/global.scss";
import Header from "./Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
