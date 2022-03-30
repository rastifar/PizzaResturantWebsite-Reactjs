import React from "react";
import { GlobalStyles } from "./globalStyles";

//Components
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { productData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Products heading="Choose Your Favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats For You" data={productDataTwo} />
      <Footer/>
    </>
  );
};

export default App;


