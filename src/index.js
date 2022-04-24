import "babel-polyfill";
import "react-app-polyfill/ie11";
import React from 'react'
import ReactDOM from "react-dom";
import { AppRoutes } from "./routes/AppRoutes";
import * as serviceWorker from "./serviceWorker";
import store from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
 <Provider store={store}>
   <AppRoutes/>
 </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
