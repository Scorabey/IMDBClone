'use client'

import { useMovie } from "@/entity";
import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ScrollArea } from "@/shared";

export const ListMain = () => {
  const { data } = useMovie()

  const refactDescription = (desc: string, count?: number = 6) => {
    const result = desc
      .split(" ")
      .map((word, index) => (index < count ? word.trim() : null))
      .join(" ");

    return `${result}...`;
  }

  const description =
    "The Godfather is a 1972 American epic gangster film[2][3][4] directed by Francis Ford Coppola, who co-wrote the screenplay with Mario Puzo based on Puzo's best-selling 1969 novel. The film features an ensemble cast that includes Marlon Brando, Al Pacino, James Caan, Richard Castellano, Robert Duvall, Sterling Hayden, John Marley, Richard Conte and Diane Keaton. It is the first installment in The Godfather trilogy, which chronicles the Corleone family under patriarch Vito Corleone (Brando) and the transformation of his youngest son, Michael Corleone (Pacino), from reluctant family outsider to ruthless Mafia boss.";

  return (
    <ScrollArea className="w-1/3 h-full flex flex-col items-start justify-center gap-2">
      <Item variant={"outline"}>
        <ItemMedia variant={"icon"}></ItemMedia>
        <ItemContent>
          <ItemTitle>The Godfather</ItemTitle>
          <ItemDescription>{refactDescription(description, 8)}</ItemDescription>
        </ItemContent>
      </Item>
    </ScrollArea>
  );
}