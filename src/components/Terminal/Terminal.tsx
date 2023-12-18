import { useRef, useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import Editor from "@monaco-editor/react";
import { Theme } from "@monaco-editor/react/dist";
import { IconWrapper, CopyIcon } from "@/icons";
import { programmingLanguages, languages, themes } from "@/mock/data";
import useStore from "@/store/store";
import { SelectorComponent } from "..";

interface TerminalComponentProps {
  editable?: boolean;
}

function TerminalComponent({ editable = false }: TerminalComponentProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const {
    selectedLang,
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

  function handleOnLangChange(currentLanguage: string): void {
    const language = languages.find((lang) => lang.label === currentLanguage);
    if (language) {
      setLang(language);
    }
  }

  function handleOnCodeChange(value: string | undefined): void {
    if (value) {
      setCode(value);
    }
  }

  const handleOnThemeChange = (theme: string) => {
    if (theme) {
      setTheme(theme as Theme);
    }
  };

  return editable ? (
    <div
      tabIndex={0}
      onKeyDown={() => textareaRef.current?.focus()}
      onClick={() => textareaRef.current?.focus()}
      className={`relative flex bg-black flex-col h-full w-full rounded-ss-lg rounded-se-lg ${
        selectedTheme === "light" ? "bg-gray-200 text-black" : ""
      }`}
    >
      <div className="flex justify-between px-4 py-1 h-[35px]">
        <div className="flex">Terminal</div>
        <div className="flex gap-3">
          <div className="cursor-pointer" onClick={handleOnCopyClick}>
            <IconWrapper>
              <CopyIcon />
            </IconWrapper>
          </div>
          <SelectorComponent
            value={selectedTheme}
            options={themes}
            handleOnSelect={handleOnThemeChange}
          />
          <SelectorComponent
            value={selectedProgramLang.label}
            options={programmingLanguages}
            className="w-[120px]"
            handleOnSelect={handleOnProgramLangChange}
          />
          <SelectorComponent
            value={selectedLang.label}
            className="w-[50px]"
            options={languages}
            handleOnSelect={handleOnLangChange}
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
      className={`relative flex bg-black flex-col h-full w-full rounded-ss-lg rounded-se-lg  ${
        selectedTheme === "light" ? "bg-gray-200 text-black" : ""
      }`}
    >
      <div className="flex justify-between px-4 py-1 h-[35px]">
        <div className="flex">Terminal</div>

        <div className="flex gap-4">
          <div className="cursor-pointer" onClick={handleOnCopyClick}>
            <IconWrapper>
              <CopyIcon />
            </IconWrapper>
          </div>
          <div>{selectedProgramLang.label}</div>
        </div>
      </div>
      <Editor
        options={{ readOnly: true }}
        width={"100%"}
        height={"100%"}
        language={selectedProgramLang.label}
        theme={selectedTheme}
        defaultValue={notEditableCode}
      />
    </div>
  );
}

export { TerminalComponent };
