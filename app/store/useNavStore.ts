import { create } from "zustand";
import { persist } from "zustand/middleware";

type NavStore = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  currentSection: string;
  setCurrentSection: (section: string) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

export const useNavStore = create<NavStore>()(
  typeof window !== "undefined" // Asegura que persist se use solo en el cliente
    ? persist(
        (set) => ({
          selectedTab: "home",
          setSelectedTab: (tab) => set({ selectedTab: tab.toLowerCase() }),
          currentSection: "home",
          setCurrentSection: (section) =>
            set({
              currentSection: section.toLowerCase(),
              selectedTab: section.toLowerCase(),
            }),
          isLoading: true,
          setIsLoading: (loading) => set({ isLoading: loading }),
        }),
        { name: "nav-storage" }
      )
    : (set) => ({
        selectedTab: "home",
        setSelectedTab: (tab) => set({ selectedTab: tab.toLowerCase() }),
        currentSection: "home",
        setCurrentSection: (section) =>
          set({
            currentSection: section.toLowerCase(),
            selectedTab: section.toLowerCase(),
          }),
        isLoading: true,
        setIsLoading: (loading) => set({ isLoading: loading }),
      })
);
