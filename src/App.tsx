import React, { FC } from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import PassengersPages from "./components/pages/PassengersPages/PassengersPages";
import Index from "./components/pages/Index/Index";
import StepFirst from "./components/pages/StepFirst/StepFirst";
import { AppAPI } from "./api";

// const test = async () => {
//   // const data = await AppAPI.getRoutes({
//   //   from_city_id: "6212d3c15fc56b48553d43bc",
//   //   to_city_id: "6212d3c15fc56b48553d43bd",
//   // });
//   const data = await AppAPI.postSubscrube("1234@.mail.com");

//   console.log(data);
// };
// test();
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
            <Route path="/" element={<StepFirst />} />
            {/* <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate replace to="/404" />} /> */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
