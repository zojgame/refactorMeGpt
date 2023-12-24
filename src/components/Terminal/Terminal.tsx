import { useRef, useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import Editor from "@monaco-editor/react";
import { Theme } from "@monaco-editor/react/dist";
import { IconWrapper, CopyIcon, SentIcon } from "@/icons";
import { programmingLanguages, languages, themes } from "@/mock/data";
import useStore from "@/store/store";
import { SelectorComponent } from "..";

interface TerminalComponentProps {
  editable?: boolean;
}

function TerminalComponent({ editable = false }: TerminalComponentProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const {
    selectedProgramLang,
    selectedTheme,
    setProgramLang,
    setLang,
    setTheme,
  } = useStore();
  const [, copy] = useCopyToClipboard();
  const [code, setCode] = useState(`// Вставьте ваш код

const fib = (n) => {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};`);

  const notEditableCode = `const fib = (n) => {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};`;

  function handleOnCopyClick(): void {
    copy(code);
  }

  function handleOnProgramLangChange(language: string): void {
    const programLang = programmingLanguages.find(
      (lang) => lang.label === language
    );
    if (programLang) {
      setProgramLang(programLang);
    }
  }

  function handleOnCodeChange(value: string | undefined): void {
    if (value) {
      setCode(value);
    }
  }

  return editable ? (
    <div
      tabIndex={0}
      onKeyDown={() => textareaRef.current?.focus()}
      onClick={() => textareaRef.current?.focus()}
      className={`relative flex bg-black flex-col h-[calc(100vh-100px)] w-full ${
        selectedTheme === "light" ? "bg-gray-200 text-black" : ""
      }`}
    >
      <div className="flex justify-between px-4 py-1 h-[55px] items-center border-r border-[#393929]">
        <div className="flex gap-3">
          <div>Terminal</div>
        </div>

        <div className="flex gap-3">
          <div className="cursor-pointer" onClick={handleOnCopyClick}>
            <IconWrapper>
              <CopyIcon />
            </IconWrapper>
          </div>
          <SelectorComponent
            value={selectedProgramLang.label}
            options={programmingLanguages}
            className="w-[120px]"
            handleOnSelect={handleOnProgramLangChange}
          />
        </div>
      </div>
      <Editor
        onChange={handleOnCodeChange}
        language={selectedProgramLang.label}
        theme={selectedTheme}
        defaultValue={code}
      />
    </div>
  ) : (
    <div
      tabIndex={0}
      onKeyDown={() => textareaRef.current?.focus()}
      onClick={() => textareaRef.current?.focus()}
      className={`relative flex bg-black flex-col h-[calc(100vh-100px)] w-full  ${
        selectedTheme === "light" ? "bg-gray-200 text-black" : ""
      }`}
    >
      <div className="flex justify-end px-4 py-1 h-[55px] items-center">
        <div className="flex gap-4">
          <div className="cursor-pointer" onClick={handleOnCopyClick}>
            <IconWrapper>
              <CopyIcon />
            </IconWrapper>
          </div>
        </div>
      </div>
      <Editor
        options={{ readOnly: true }}
        language={selectedProgramLang.label}
        theme={selectedTheme}
        defaultValue={notEditableCode}
      />
    </div>
  );
}

export { TerminalComponent };
