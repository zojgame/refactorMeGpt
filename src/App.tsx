// import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./App.css";
import { TerminalComponent, UserPanelComponent } from "@/components";

function App() {
  return (
    <div className="flex flex-col">
      <UserPanelComponent />
      <div className="flex h-fit justify-around">
        <TerminalComponent editable />
        <TerminalComponent />
      </div>
    </div>
  );
}

export default App;
