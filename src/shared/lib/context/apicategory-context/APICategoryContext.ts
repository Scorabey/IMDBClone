"use client";

import { createContext, useContext } from "react";
import {
  MovieCollection,
  APIContextInt,
  Category,
} from "@/shared";

export const APICategoryContext = createContext<APiContextInt<Category> | null>(
  null,
);

export function useCategory() {
  const context = useContext(APICategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within APICategoryProvider");
  }
  return context;
}