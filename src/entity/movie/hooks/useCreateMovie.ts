import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  CreateMovie,
  CreateMovieSchema,
  MovieSchema,
  MovieCollectionSchema
} from "@/entity";
import {
  API
} from "@/shared";

const movieApi = new API("movie", {
  list: MovieCollectionSchema,
  item: MovieSchema,
  create: CreateMovieSchema,
});

export const useCreateMovie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newMovie: CreateMovie) => {
      return movieApi.create(newMovie);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    }
  });
}