import { Home } from "./pages/home.tsx";
import "react-toastify/dist/ReactToastify.css";
import * as ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { Buffer } from "buffer";
import process from "process";

window.Buffer = Buffer;
window.process = process;
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Home />
    <ToastContainer />
  </>
);
