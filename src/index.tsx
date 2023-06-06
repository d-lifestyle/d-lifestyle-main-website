import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./redux";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
     <React.StrictMode>
          <SnackbarProvider>
               <BrowserRouter>
                    <Provider store={store}>
                         <App />
                    </Provider>
               </BrowserRouter>
          </SnackbarProvider>
     </React.StrictMode>
);
