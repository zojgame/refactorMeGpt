import { create } from "zustand";
import { Selector } from "@/types";
import { programmingLanguages } from "@/mock/data";

interface StoreType {
  modal: React.ReactNode | null;
  selectedProgramLang: Selector;
  setModal: (modal: React.ReactNode | null) => void;
  setProgramLang: (lang: Selector) => void;
}

const useStore = create<StoreType>((set) => ({
  modal: null,
  selectedProgramLang: programmingLanguages[0],
  setModal: (modal) => set(() => ({ modal: modal })),
  setProgramLang: (lang) => set(() => ({ selectedProgramLang: lang })),
}));

export default useStore;
