import "../styles/globals.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import {ThemeProvider} from 'next-themes' ; 
import { appWithTranslation } from 'next-i18next';
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <NavBar></NavBar>
      <Component {...pageProps}/>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default MyApp;
