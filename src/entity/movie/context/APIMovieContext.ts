"use client";

import {createContext, useContext} from "react";
import { MovieCollection } from "@/entity"
import { APIContextInt } from "@/shared";

export const APIMovieContext = createContext<APIContextInt<MovieCollection> | undefined>(undefined);

export function useMovie() {
  const context = useContext(APIMovieContext);
  if (!context) {
    throw new Error("Use APIMovieContext on APIMovieProvider");
  }
  return context;
}