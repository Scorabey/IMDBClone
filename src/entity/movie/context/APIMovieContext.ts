"use client";

import {createContext, useContext} from "react";
import { MovieCollection, APIContextInt } from "@/shared";

export const APIMovieContext = createContext<APIContextInt<MovieCollection> | null>(null);

export function useMovie() {
  const context = useContext(APIMovieContext);
  if (!context) {
    throw new Error("Use APIMovieContext on APIMovieProvider");
  }
  return context;
}