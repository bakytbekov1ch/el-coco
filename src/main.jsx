import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./scss/style.css";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "./locales/i18next.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </StrictMode>
);
