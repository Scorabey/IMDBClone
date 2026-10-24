import { z } from 'zod'

const CategorySchema = z.object({
  id: z.number().int(),
  name: z.string(),
});

const CategoryCreateSchema = z.object({
  name: z.string().min(3).max(128),
});

export type Category = z.infer<typeof CategorySchema>;
export type CreateCategory = z.infer<typeof CategorySchema>;

export { CategorySchema, CategoryCreateSchema };