import "./App.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <SSRProvider>
      <RouterProvider router={routes} />
    </SSRProvider>
  );
}

export default App;
