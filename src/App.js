import React from "react";
import Header from "./components/Header";
import MainWrapper from "./components/MainWrapper";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { LanguageProvider } from "./Context/multilang-context";
import Exservices from "./components/Exservices";

function App() {
  return (
    <>
      <LanguageProvider>
        <Header />
        <MainWrapper>
          <Home />
          <About />
          <Services />
          <Exservices />
          <ContactUs />
        </MainWrapper>
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
