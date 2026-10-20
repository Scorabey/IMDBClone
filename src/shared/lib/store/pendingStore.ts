import { PendingStore } from "../types";
import { create } from 'zustand'


export const usePendingStore = create<PendingStore>((set) => ({
    isPendingStore: false,
    setIsPendingStore: (isPendingStore: boolean) => set({ isPendingStore })
}))