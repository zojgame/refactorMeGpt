import { create } from "zustand";
import { Selector } from "@/types";
import { programmingLanguages } from "@/consts/data";
import { MessageInstance } from "antd/es/message/interface";

interface StoreType {
  notificationMessage: MessageInstance | null;
  modal: React.ReactNode | null;
  selectedProgramLang: Selector;
  codePrompt: string;
  setCodePrompt: (code: string) => void;
  setNotificationMessage: (message: MessageInstance | null) => void;
  setModal: (modal: React.ReactNode | null) => void;
  setProgramLang: (lang: Selector) => void;
}

const useStore = create<StoreType>((set) => ({
  notificationMessage: null,
  modal: null,
  codePrompt: "",
  selectedProgramLang: programmingLanguages[0],
  setCodePrompt: (code: string) => set(() => ({ codePrompt: code })),
  setNotificationMessage: (message) =>
    set(() => ({ notificationMessage: message })),
  setModal: (modal) => set(() => ({ modal: modal })),
  setProgramLang: (lang) => set(() => ({ selectedProgramLang: lang })),
}));

export default useStore;
