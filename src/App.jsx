import React from "react";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";

import List from "./pages/list/List";
import Product from "./pages/product/Product";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" />
        <Route index element={<Home />} />
        <Route path="users">
          <Route index element={<List />} />
        </Route>
        <Route path="/products" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
