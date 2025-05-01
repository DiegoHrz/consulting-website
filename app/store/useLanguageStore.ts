// store/languageStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Language = "de" | "en";

interface LanguageState {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist( // Middleware para persistir en localStorage
    (set) => ({
      lang: "de", // Idioma por defecto
      setLang: (lang) => set({ lang }),
    }),
    {
      name: "language-storage", // Key en localStorage
    }
  )
);