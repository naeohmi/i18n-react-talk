// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import Hello from './Hello';
// import './style.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'React'
//     };
//   }

//   render() {
//     return (
//       <div>
//         <Hello name={this.state.name} />
//         <p>
//           Start editing to see some magic happen :)
//         </p>
//       </div>
//     );
//   }
// }

// render(<App />, document.getElementById('root'));


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
