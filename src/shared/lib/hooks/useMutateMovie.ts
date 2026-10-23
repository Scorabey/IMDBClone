import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  API,
  CreateMovie,
  CreateMovieSchema,
  MovieCollectionSchema,
  MovieSchema,
} from "@/shared";

const movieApi = new API("movie", {
  list: MovieCollectionSchema,
  item: MovieSchema,
  create: CreateMovieSchema,
});

export const useMutateMovie = () => {
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