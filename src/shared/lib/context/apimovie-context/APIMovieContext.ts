"use client";

import {createContext, useContext} from "react";
import { MovieCollection } from "@/shared";

interface APIContextInt {
  data: MovieCollection | undefined;
  error: Error | null;
  isPending: boolean;
}

export const APIMovieContext = createContext<APIContextInt | null>(null);

export function useApp() {
  const context = useContext(APIMovieContext);
  if (!context) {
    throw new Error("Use APIMovieContext on AppProvider");
  }
  return context;
}