import { useState } from "react";
import { Theme } from "@monaco-editor/react/dist";
import useStore from "@/store/store";
import { Selector } from "@/types";
import "./selector.css";

interface SelectorComponentProps {
  options: Selector[];
  value: string;
  handleOnSelect: (event: string) => void;
  className?: string;
}

const SelectorComponent = ({
  options,
  value,
  handleOnSelect,
  className = "w-[100px]",
}: SelectorComponentProps) => {
  const [isActive, setIsActive] = useState(false);
  const { selectedTheme } = useStore();

  const handleOnClick = (opt: Selector) => {
    return () => {
      const theme = opt.label as Theme;
      handleOnSelect(theme);
      setIsActive(!isActive);
    };
  };

  function handleOnActiveChange(): void {
    setIsActive((prev) => !prev);
  }

  return (
    <div className={`dropdown flex w-[120px] ${className ? className : ""}`}>
      <div
        onClick={handleOnActiveChange}
        className="dropdown-btn truncate w-full"
      >
        {value}
        <span className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"} />
      </div>
      <div
        className="dropdown-content"
        style={{ display: isActive ? "block" : "none" }}
      >
        {options.map((opt) => (
          <div
            key={opt.value}
            onClick={handleOnClick(opt)}
            className={`item truncate bg-inherit ${
              selectedTheme === "light"
                ? "hover:bg-[#282a36] text-black hover:text-white"
                : "hover:bg-white text-white hover:text-black"
            }`}
          >
            {opt.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export { SelectorComponent };