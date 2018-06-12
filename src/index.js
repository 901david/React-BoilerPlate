import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleWare from "redux-thunk";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./components/App";
import "./styles/styles.sass";
import reducers from "./reducers";

const loggerMiddleWare = createLogger();
const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleWare, loggerMiddleWare)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("app")
);
