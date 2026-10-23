import { z } from "zod";

const LinkSchema = z.object({
  href: z.string(),
  method: z.enum(["GET", "POST", "PUT", "DELETE"]),
});

const MovieLinksSchema = z.object({
  self: LinkSchema,
  collection: LinkSchema,
  update: LinkSchema,
  delete: LinkSchema,
});

const CollectionLinksSchema = z.object({
  self: LinkSchema,
  next: LinkSchema.nullable(),
  prev: LinkSchema.nullable(),
});

const CategorySchema = z.object({
  id: z.number().int(),
  name: z.string(),
});

const CategoryCreateSchema = z.object({
  name: z.string().min(3).max(128),
});

const MovieSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  img: z.string(),
  categories: z.array(CategorySchema).optional(),
  _links: MovieLinksSchema,
});

const MetaSchema = z.object({
  total: z.number().int().nonnegative(),
  limit: z.number().int().positive(),
  page: z.number().int().positive(),
  totalPages: z.number().int().nonnegative(),
  prev: z.number().int().nullable(),
  self: z.number().int(),
  next: z.number().int().nullable(),
  hasNext: z.boolean(),
  hasPrev: z.boolean(),
  _links: CollectionLinksSchema,
});

const MovieCollectionSchema = z.object({
  data: z.array(MovieSchema),
  meta: MetaSchema,
});

const CreateMovieSchema = z.object({
  title: z.string().min(3).max(255),
  description: z.string().min(8).max(5000),
  img: z.httpUrl(),
  categoryIds: z.array(z.number()),
});

export const UpdateMovieSchema = CreateMovieSchema.partial();

export type Link = z.infer<typeof LinkSchema>;
export type Category = z.infer<typeof CategorySchema>;
export type Movie = z.infer<typeof MovieSchema>;
export type Meta = z.infer<typeof MetaSchema>;
export type MovieCollection = z.infer<typeof MovieCollectionSchema>;
export type CreateMovie = z.infer<typeof CreateMovieSchema>;
export type UpdateMovie = z.infer<typeof UpdateMovieSchema>;

export {
  MovieSchema,
  CategorySchema,
  CategoryCreateSchema,
  CollectionLinksSchema,
  CreateMovieSchema,
  LinkSchema,
  MetaSchema,
  MovieCollectionSchema,
  MovieLinksSchema,
};
