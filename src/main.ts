import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { QueryProvider } from "./lib/react-query/QueryProvide";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(BrowserRouter, { children: _jsx(QueryProvider, { children: _jsx(AuthProvider, { children: _jsx(App, {}) }) }) }));
