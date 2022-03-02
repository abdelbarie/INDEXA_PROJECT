import "../styles/globals.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import {ThemeProvider} from 'next-themes' ; 
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { appWithTranslation } from 'next-i18next';
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <NavBar></NavBar>
      <Component {...pageProps}/>
      <Footer></Footer>
      <MessengerCustomerChat
      pageId="103957322240886"
      appId="507368634067637"
      />
    </ThemeProvider>
  );
}

export default MyApp;
