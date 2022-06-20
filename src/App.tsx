import React, { FC } from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import FillingDocuments from "./components/pages/FillingDocuments/FillingDocuments";

import StepFirst from "./components/pages/StepFirst/StepFirst";
import LocationSelectPage from "./components/pages/LocationSelectPage/LocationSelectPage";
import Index from "./components/pages/Index/Index";
import PayPage from "./components/pages/PayPage/PayPage";
import ConfirmPage from "./components/pages/ConfirmPage/ConfirmPage";
import FinishPage from "./components/pages/FinishPage/FinishPage";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            {/* <Route path="/catalog/:id" element={<ProductPage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/about" element={<About />} /> */}
            <Route path="/" element={<Index />} />
            <Route path="/first" element={<StepFirst />} />
            <Route path="/two" element={<LocationSelectPage />} />
            <Route path="/fillingDocuments" element={<FillingDocuments />} />
            <Route path="/PayPage" element={<PayPage />} />
            <Route path="/ConfirmPage" element={<ConfirmPage />} />
            <Route path="/FinishPage" element={<FinishPage />} />
            {/* <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate replace to="/404" />} /> */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
