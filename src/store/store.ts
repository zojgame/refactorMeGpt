import { create } from "zustand";

interface StoreType{
    modal: React.ReactNode | null
    setModal: (modal: React.ReactNode | null) => void
}

const useStore = create<StoreType>((set) => ({
    modal: null,
    setModal: (modal) => set(() => ({modal: modal}))
}))

export default useStore;