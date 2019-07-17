import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { IntlProvider } from "react-intl";
import { getLocaleData } from "./lib/i18n/getLocaleData";

const intlProps = getLocaleData();

ReactDOM.render(
  <IntlProvider {...intlProps}>
    <App />
  </IntlProvider>,
document.getElementById("root"));
