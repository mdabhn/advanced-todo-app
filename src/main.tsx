import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./features/store";

import "./index.css";
import App from "./_app";

createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
