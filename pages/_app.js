import "../styles/globals.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar></NavBar>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}

export default MyApp;
