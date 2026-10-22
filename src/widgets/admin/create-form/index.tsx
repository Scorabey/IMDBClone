import {
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldDescription,
  Field,
  FieldLabel,
  Input,
  FieldSeparator,
  Textarea,
  Checkbox,
  Button,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/shared";

const categories = [
  { label: "Select category", value: null },
  { label: "Horror", value: "horror" },
  { label: "Action", value: "action" },
  { label: "Comedy", value: "comedy" },
  { label: "Drama", value: "drama" },
  { label: "Thriller", value: "thriller" },
  { label: "Sci-Fi", value: "sci-fi" },
  { label: "Fantasy", value: "fantasy" },
  { label: "Romance", value: "romance" },
  { label: "Animation", value: "animation" },
  { label: "Adventure", value: "adventure" },
  { label: "Crime", value: "crime" },
  { label: "Documentary", value: "documentary" },
  { label: "Mystery", value: "mystery" },
  { label: "Western", value: "western" },
  { label: "Musical", value: "musical" },
];

export const AdminMain = () => {
  return (
    <div className="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>New Movie</FieldLegend>
            <FieldDescription>
              Enter the movie details to add it to your collection.
            </FieldDescription>
            <FieldGroup className="flex flex-row w-full">
              <Field>
                <FieldLabel>Movie Title</FieldLabel>
                <Input placeholder="The Godfather" />
              </Field>
              <Field>
                <FieldLabel>Image Link</FieldLabel>
                <Input placeholder="https://placeholder/image" />
              </Field>
            </FieldGroup>
            <FieldGroup className="flex flex-col w-full">
              <Field>
                <FieldLabel>Movie Description</FieldLabel>
                <Textarea placeholder="Enter descripttion..." />
              </Field>
              <Field>
                <Select
                  items={categories}
                  multiple
                  defaultValue={categories[0]}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}