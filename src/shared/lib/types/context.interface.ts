export interface APIContextInt<T> {
  data: T[] | undefined;
  error: Error | null;
  isPending: boolean;
}