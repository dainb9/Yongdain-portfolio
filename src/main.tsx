// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";

// 👇 이 줄이 반드시 있어야 Tailwind + 커스텀 스타일이 적용됨
import "./index.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
