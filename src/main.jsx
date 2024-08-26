import * as React from "react";
import * as ReactDOM from "react-dom/client";

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./Routes/Routes";
import {HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl  mx-auto">
    <React.StrictMode>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </React.StrictMode>
  </div>
);