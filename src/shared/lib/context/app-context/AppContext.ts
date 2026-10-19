"use client";

import { createContext } from "react";
import { MovieCollection } from "../../types";

interface ContextInt {
  data: MovieCollection | undefined;
  error: Error | null;
  isPending: boolean;
}

export const AppContext = createContext<ContextInt | null>(null);
