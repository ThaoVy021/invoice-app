import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { store } from "./redux/store/store";

import "./index.scss";
import emailjs from "@emailjs/browser";

emailjs.init({
  publicKey: "g3ukIcsb_jLDAbXD1",
  // Do not allow headless browsers
  blockHeadless: true,
  blockList: {
    // Block the suspended emails
    list: ["foo@emailjs.com", "bar@emailjs.com"],
    // The variable contains the email address
    watchVariable: "userEmail",
  },
  limitRate: {
    // Set the limit rate for the application
    id: "app",
    // Allow 1 request per 10s
    throttle: 10000,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
