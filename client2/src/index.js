import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import ScrollToTop from "./components/adminDash/ScrollTop/ScrollToTop"
import { Provider } from "react-redux";
import { store } from "./reducers";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        {/* <ScrollToTop /> */}
        <App />
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
