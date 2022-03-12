import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import PassengersPages from "./components/pages/PassengersPages/PassengersPages";

function App() {
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
            <Route path="/" element={<PassengersPages />} />
            {/* <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate replace to="/404" />} /> */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
