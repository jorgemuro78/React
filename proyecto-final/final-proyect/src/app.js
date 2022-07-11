import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/pages/Index";

import Team from "./components/pages/Team";
import Churchs from "./components/pages/Churchs";
import Contact from "./components/pages/Contact";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Churchs" element={<Churchs />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
