import React from "react";
import ReactDOM from "react-dom";
import { StyleProvider, ThemePicker } from "vcc-ui";

import { App } from "./components";

ReactDOM.render(
  <React.StrictMode>
    <StyleProvider>
      <ThemePicker variant="light">
        <App />
      </ThemePicker>
    </StyleProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
