"use client";

import { createContext, useContext } from "react";
import { Category } from "@/entity";
import {
  MovieCollection,
  APIContextInt,
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