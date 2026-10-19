import { useContext } from "react";
import { AppContext } from "@/shared";

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Use AppContext on AppProvider");
  }
  return context;
}
