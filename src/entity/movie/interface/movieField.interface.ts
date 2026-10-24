import { z } from "zod";

const IFormSheetScheme = z.object({
  categories: z.array(z.string()),
});

const IFormSearchScheme = z.object({
  inputSearch: z.string(),
});

export type IFormSearch = z.infer<typeof IFormSearchScheme>;
export type IFormSheet = z.infer<typeof IFormSheetScheme>;

export { IFormSheetScheme, IFormSearchScheme };
