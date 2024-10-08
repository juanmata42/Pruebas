import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App/App";
import "styles/index.scss";
import "styles/common.scss";
import { store } from "store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);