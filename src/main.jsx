import * as React from "react";
import * as ReactDOM from "react-dom/client";

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./Routes/Routes";
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl  mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AuthProvider>
    </React.StrictMode>
  </div>
);