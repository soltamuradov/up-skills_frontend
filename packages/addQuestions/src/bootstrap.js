import { createRoot } from "react-dom/client";
import App from "./App";

const node = createRoot(document.querySelector("#root"));

node.render(<App/>);
