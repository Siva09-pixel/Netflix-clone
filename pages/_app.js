import { RecoilRoot } from "recoil";
import { AuthContextProvider } from "../Auth/AuthContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </AuthContextProvider>
  );
}
