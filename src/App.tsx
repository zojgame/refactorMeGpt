// import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./App.css";
import {
  HeaderComponent,
  TerminalComponent,
  UserPanelComponent,
} from "./components";

function App() {
  return (
    <div className="flex flex-col">
      <HeaderComponent />
      <UserPanelComponent />
      <div className="flex h-fit justify-around">
        <TerminalComponent editable />
        <TerminalComponent />
      </div>
    </div>
  );
}

export default App;
