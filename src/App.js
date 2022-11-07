import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router/routes";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto rounded-sm">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
