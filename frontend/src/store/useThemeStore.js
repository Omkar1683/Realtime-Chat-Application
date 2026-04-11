import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("VConnect-theme") || "coffee",
  setTheme : (theme) =>{ 
    localStorage.setItem("VConnect-theme", theme),
    set({theme})},
}))