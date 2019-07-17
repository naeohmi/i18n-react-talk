import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { IntlProvider } from "react-intl";
import { getLocaleData } from "./lib/i18n/getLocaleData";
import './style.css';

const intlProps = getLocaleData();

ReactDOM.render(
  <IntlProvider {...intlProps}>
    <App />
  </IntlProvider>,
document.getElementById("root"));
