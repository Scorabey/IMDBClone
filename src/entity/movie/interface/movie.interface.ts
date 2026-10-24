import { z } from "zod";
import { CategorySchema } from "@/entity";
import { MetaSchema, LinkSchema, CollectionSchema } from "@/shared";

const MovieLinksSchema = z.object({
  self: LinkSchema,
  collection: LinkSchema,
  update: LinkSchema,
  delete: LinkSchema,
});

const MovieSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  img: z.string(),
  categories: z.array(CategorySchema).optional(),
  _links: MovieLinksSchema,
});

const CreateMovieSchema = z.object({
  title: z.string().min(3).max(255),
  description: z.string().min(8).max(5000),
  img: z.httpUrl(),
  categoryIds: z.array(z.number()),
});

export const UpdateMovieSchema = CreateMovieSchema.partial();

export const MovieCollectionSchema = CollectionSchema(MovieSchema)

export type Movie = z.infer<typeof MovieSchema>;
export type CreateMovie = z.infer<typeof CreateMovieSchema>;
export type UpdateMovie = z.infer<typeof UpdateMovieSchema>;
export type MovieCollection = z.infer<typeof MovieCollectionSchema>;

export {
  MovieSchema,
  CreateMovieSchema,
  MovieLinksSchema,
  LinkSchema,
};