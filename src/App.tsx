import SyntaxHighlighter from "react-syntax-highlighter";
import synthwave84 from "react-syntax-highlighter/dist/esm/styles/prism/synthwave84";
// import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./App.css";
import { HeaderComponent } from "./components";

function App() {
  const codeString = `(num) => {
                        return num + 1
        }`;
  return (
    <>
      <HeaderComponent />
      <SyntaxHighlighter language="javascript" style={synthwave84}>
        {codeString}
      </SyntaxHighlighter>
    </>
  );
}

export default App;
