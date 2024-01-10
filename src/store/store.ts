import { create } from "zustand";
import { Selector } from "@/types";
import { programmingLanguages } from "@/consts/data";
import { MessageInstance } from "antd/es/message/interface";

interface StoreType {
  notificationMessage: MessageInstance | null;
  modal: React.ReactNode | null;
  selectedProgramLang: Selector;
  setNotificationMessage: (message: MessageInstance | null) => void;
  setModal: (modal: React.ReactNode | null) => void;
  setProgramLang: (lang: Selector) => void;
}

const useStore = create<StoreType>((set) => ({
  notificationMessage: null,
  modal: null,
  selectedProgramLang: programmingLanguages[0],
  setNotificationMessage: (message) => set(() => ({notificationMessage: message})),
  setModal: (modal) => set(() => ({ modal: modal })),
  setProgramLang: (lang) => set(() => ({ selectedProgramLang: lang })),
}));

export default useStore;
