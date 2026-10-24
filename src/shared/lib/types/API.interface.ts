import { z } from "zod";
import { MovieSchema } from "@/entity";

const LinkSchema = z.object({
  href: z.string(),
  method: z.enum(["GET", "POST", "PUT", "DELETE"]),
});

const CollectionLinksSchema = z.object({
  self: LinkSchema,
  next: LinkSchema.nullable(),
  prev: LinkSchema.nullable(),
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

const CollectionSchema = <T extends z.ZodTypeAny>(item: T) => z.object({
  data: z.array(item),
  meta: MetaSchema,
})

export type Link = z.infer<typeof LinkSchema>;
export type Meta = z.infer<typeof MetaSchema>;

export { CollectionLinksSchema, MetaSchema, CollectionSchema, LinkSchema };
