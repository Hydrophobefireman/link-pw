// javascript is supported
import "./App.css";

import { VNode, render } from "@hydrophobefireman/ui-lib";

import { RouteLoader } from "./components/RouteLoader";
import { root } from "./style";

function App(): VNode {
  return (
    <main class={root}>
      <RouteLoader />
    </main>
  );
}

render(<App />, document.getElementById("app-mount"));
