import { Theme } from "@monaco-editor/react/dist";
import { create } from "zustand";
import { Selector } from "@/types";
import { programmingLanguages, languages } from "@/mock/data";

interface StoreType {
  modal: React.ReactNode | null;
  selectedProgramLang: Selector;
  selectedLang: Selector;
  selectedTheme: Theme;
  setModal: (modal: React.ReactNode | null) => void;
  setTheme: (theme: Theme) => void;
  setProgramLang: (lang: Selector) => void;
  setLang: (lang: Selector) => void;
}

const useStore = create<StoreType>((set) => ({
  modal: null,
  selectedLang: languages[0],
  selectedProgramLang: programmingLanguages[0],
  selectedTheme: "vs-dark",
  setTheme: (theme) => set(() => ({ selectedTheme: theme })),
  setModal: (modal) => set(() => ({ modal: modal })),
  setProgramLang: (lang) => set(() => ({ selectedProgramLang: lang })),
  setLang: (lang) => set(() => ({ selectedLang: lang })),
}));

export default useStore;
