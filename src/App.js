import { useState } from "react";
import "./App.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { AuthProvider } from "./components/auth/AuthProvider";

function App() {
  return (
    <SSRProvider>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </SSRProvider>
  );
}

export default App;
