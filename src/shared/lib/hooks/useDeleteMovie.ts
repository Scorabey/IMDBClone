import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  API,
  Movie,
  CreateMovieSchema,
  MovieCollectionSchema,
  MovieSchema,
} from "@/shared";

const movieAPI = new API("movie", {
  list: MovieCollectionSchema,
  item: MovieSchema,
  create: CreateMovieSchema,
});

export const useDeleteMovie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => {
      return movieAPI.delete(id);
    },
    onSuccess: (data: Movie) => {
      queryClient.invalidateQueries({ queryKey: data.id });
    }
  })
}