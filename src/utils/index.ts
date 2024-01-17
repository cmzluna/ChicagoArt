import { Artwork } from "@/types";

export const isFavorite = (array: Artwork[] | undefined, item: Artwork): boolean => {
  return array?.some((el) => el.id === item.id) ?? false;
};

export const truncateText = (text: string, wordLimit: number): string => {
  const words = text.split(/\s+/);
  const truncatedWords = words.slice(0, wordLimit);
  const truncatedText = truncatedWords.join(" ");

  return words.length > wordLimit ? `${truncatedText} [...]` : truncatedText;
};
