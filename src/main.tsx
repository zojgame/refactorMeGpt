import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { HeaderComponent } from "@/components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderComponent />,
    children: [
      {
        path: "history",
        element: <div>History</div>,
      },
      {
        path: "main",
        element: <App />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
