import "../styles/globals.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import { ThemeProvider } from "next-themes";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Head from "next/head";
import GoTop from "../components/partials/GoTop";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <meta
          name="msapplication-TileImage"
          content="/imgs/Thumbnail.png"
        ></meta>

        <meta property="og:site_name" content="Indexa Hearing Solutions"></meta>
        <meta
          property="og:title"
          content="HELPING TO IPMROVE THEIR LIVES"
        ></meta>
        <meta
          property="og:description"
          content="Equipements et services adaptées et destinées aux adultes et aux enfants."
        ></meta>
        <meta
          property="og:image"
          itemProp="image"
          content="/imgs/Thumbnail.png"
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:image:type" content="image/png"></meta>
        <meta property="og:image:width" content="400"></meta>
        <meta property="og:image:height" content="400"></meta>
        <meta property="og:url" content="your_website_url_here"></meta>
        <title>Indexa Braille</title>
      </Head>
      <GoTop></GoTop>
      <NavBar></NavBar>
      <Component {...pageProps} />
      <Footer></Footer>
      <MessengerCustomerChat pageId="103957322240886" appId="507368634067637" />
  
    </ThemeProvider>
  );
}

export default MyApp;
