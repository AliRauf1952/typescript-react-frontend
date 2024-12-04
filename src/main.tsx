import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { RecordProvider } from "./context/RecordProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <RecordProvider>
      <App />
    </RecordProvider>
  </BrowserRouter>
);
