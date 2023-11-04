import { createRoot } from "react-dom/client";
import App from "./app/App";

const node = createRoot(document.querySelector("#root"));

node.render(<App/>);
