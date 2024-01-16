import { useEffect, useRef } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import Editor from "@monaco-editor/react";
import { IconWrapper, CopyIcon } from "@/icons";
import { programmingLanguages } from "@/consts/data";
import useStore from "@/store/store";
import { SelectorComponent } from "..";

interface TerminalComponentProps {
  editable?: boolean;
  defaultCode?: string;
  title?: string;
}

interface EditableTerminalComponentProps {
  defaultCode?: string;
  title?: string;
}

function TerminalComponent({
  editable = false,
  defaultCode,
  title,
}: TerminalComponentProps) {
  return editable ? (
    <EditableTerminalComponent defaultCode={defaultCode} title={title} />
  ) : (
    <ReadonlyTerminalComponent defaultCode={defaultCode} title={title} />
  );
}

function EditableTerminalComponent({
  defaultCode,
  title = "Терминал",
}: EditableTerminalComponentProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { selectedProgramLang, setProgramLang, codePrompt, setCodePrompt } =
    useStore();
  const [, copy] = useCopyToClipboard();

  useEffect(() => {
    setCodePrompt(
      defaultCode ??
        `// Вставьте ваш код
      
      const fib = (n) => {
        if (n <= 1) {
          return n;
        }
      
        return fib(n - 1) + fib(n - 2);
      };`
    );
  }, [defaultCode, setCodePrompt]);

  function handleOnCopyClick(): void {
    copy(codePrompt);
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
      setCodePrompt(value);
    }
  }

  return (
    <div
      tabIndex={0}
      onKeyDown={() => textareaRef.current?.focus()}
      onClick={() => textareaRef.current?.focus()}
      className={`relative flex bg-black flex-col h-[calc(100vh-100px)] w-full`}
    >
      <div className="flex justify-between px-4 py-1 h-[55px] items-center border-r border-[#393929] bg-primaryColor">
        {title ? <div className="font-semibold">{title}</div> : <></>}
        <div className="flex gap-3">
          <SelectorComponent
            hoverTitle="Выбрать язык"
            value={selectedProgramLang.label}
            options={programmingLanguages}
            className="w-[120px]"
            handleOnSelect={handleOnProgramLangChange}
          />
          <div className="cursor-pointer" onClick={handleOnCopyClick}>
            <IconWrapper
              hoverTitle="Копировать"
              className="text-secondaryColor hover:text-secondaryHoverColor active:text-secondaryColor"
            >
              <CopyIcon />
            </IconWrapper>
          </div>
        </div>
      </div>
      <Editor
        options={{
          scrollBeyoundLastLine: false,
          scrollBeyondLastColumn: false,
        }}
        onChange={handleOnCodeChange}
        defaultValue={codePrompt}
        language={selectedProgramLang.label}
        theme="vs-dark"
      />
    </div>
  );
}

function ReadonlyTerminalComponent({
  defaultCode,
  title,
}: EditableTerminalComponentProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { selectedProgramLang } = useStore();
  const [, copy] = useCopyToClipboard();

  const notEditableCode =
    defaultCode ??
    `const fib = (n) => {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};`;

  function handleOnCopyClick(): void {
    copy(notEditableCode);
  }

  return (
    <div
      tabIndex={0}
      onKeyDown={() => textareaRef.current?.focus()}
      onClick={() => textareaRef.current?.focus()}
      className={`relative flex bg-black flex-col h-[calc(100vh-100px)] w-full `}
    >
      <div
        className={`flex px-4 py-1 h-[55px] items-center bg-primaryColor ${
          title ? "justify-between" : "justify-end"
        }`}
      >
        {title ? <div className="font-semibold">{title}</div> : <></>}
        <div className="flex gap-4">
          <div className="cursor-pointer" onClick={handleOnCopyClick}>
            <IconWrapper
              hoverTitle="Копировать"
              className="text-secondaryColor hover:text-secondaryHoverColor active:text-secondaryColor"
            >
              <CopyIcon />
            </IconWrapper>
          </div>
        </div>
      </div>
      <Editor
        theme="vs-dark"
        options={{ readOnly: true }}
        language={selectedProgramLang.label}
        defaultValue={notEditableCode}
      />
    </div>
  );
}

export { TerminalComponent };
