import { useRef, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface TerminalComponentProps {
  editable?: boolean;
}

function TerminalComponent({ editable = false }: TerminalComponentProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [code, setCode] = useState(`
    const fib = (n) => {
        if (n <= 1) {
        return n;
        }
        return fib(n - 1) + fib(n - 2);
    };
   `);

  return editable ? (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={() => textareaRef.current?.focus()}
      onClick={() => textareaRef.current?.focus()}
      className="relative flex bg-[#282a36] w-fit flex-col rounded h-[400px]"
    >
      <div className="flex justify-between px-4 py-1  border-b h-[35px]">
        <div className="flex">Terminal</div>
        <div className="flex">JavaScript</div>
      </div>
      <textarea
        className="absolute inset-0 resize-none bg-transparent p-[43px] pl-[48px] font-mono text-transparent caret-white outline-none w-[900px] h-[600px]"
        ref={textareaRef}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <SyntaxHighlighter
        showLineNumbers
        wrapLongLines
        language="javascript"
        style={atomOneDark}
        customStyle={{
          flex: "1",
          background: "transparent",
        }}
        className="w-[900px] p-0 m-0"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  ) : (
    <div className="relative flex bg-[#282a36] w-fit flex-col">
      <div className="flex justify-between px-3 py-1 rounded rounded-es-none rounded-ee-none  border-b h-[35px]">
        <div className="flex">Terminal</div>
        <div className="flex">JavaScript</div>
      </div>
      <SyntaxHighlighter
        showLineNumbers
        wrapLongLines
        language="javascript"
        style={atomOneDark}
        customStyle={{
          flex: "1",
          background: "transparent",
        }}
        className="w-[800px] h-[600px] p-0 m-0"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export { TerminalComponent };
