import { FieldDescription, FieldLegend } from "@/shared";

export const FieldGroupTitle = () => {
  return (
    <>
      <FieldLegend>
        <h2 className="text-4xl">Discover Movies Worth Watching</h2>
      </FieldLegend>
      <FieldDescription className="text-base">
        Browse top-rated films, explore trending titles, and keep track of
        everything you want to see next.
      </FieldDescription>
    </>
  );
};
