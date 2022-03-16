import "../styles/globals.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import {ThemeProvider} from 'next-themes' ; 
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
      <meta name="msapplication-TileImage" content="/imgs/logo-indexa.png"></meta>
 
<meta property="og:site_name" content="Pure Surface"></meta>
<meta property="og:title" content="225 Days of Self Sanitizing Surface from Coronavirus"></meta>
<meta property="og:description" content="Just 1 time application"></meta>

<meta property="og:image" itemProp="image" content="/imgs/logo-indexa.png"></meta>

<meta property="og:type" content="website" ></meta>
<meta property="og:image:type" content="image/png"></meta>

<meta property="og:image:width" content="300"></meta>
<meta property="og:image:height" content="300"></meta>

<meta property="og:url" content="your_website_url_here"></meta>
      </Head>
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
