import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { HeaderComponent, LoginModalComponent } from "@/components";
import { RegistrationModalComponent } from "./components/RegistrationModal/RegistrationModal.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderComponent />,
    children: [
      {
        path: "history",
        element: (
          <div className="flex gap-5">
            <LoginModalComponent />
            <RegistrationModalComponent />
          </div>
        ),
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
