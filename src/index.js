// react
import React from "react";
// react-dom
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// react-redux
import { Provider } from "react-redux";
import store from "./redux/store";

import reportWebVitals from "./reportWebVitals";

// component
import App from "./App";

// styles
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
