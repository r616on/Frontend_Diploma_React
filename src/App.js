import React from "react";
import "./App.css";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
// import { Provider } from "react-redux";
// import store, { persistor } from "./store-toolkit/store";
//import Index from "./components/pages/Index/Index";
//import TrainSelect from "./components/pages/TrainSelect/TrainSelect";
//import ChairSelectionPage from "./components/pages/ChairSelectionPage/ChairSelectionPage";
import PassengersPages from "./components/pages/PassengersPages/PassengersPages";
// import About from "./pages/About/About";
// import Contacts from "./pages/Contacts/Contacts";
// import NotFound from "./pages/NotFound/NotFound";
// import CartPage from "./pages/CartPage/CartPage";
// import CatalogPage from "./pages/CatalogPage/CatalogPage";
// import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
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
    //   </PersistGate>
    // </Provider>
  );
}

export default App;
