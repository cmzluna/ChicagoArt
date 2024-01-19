import { type Artwork } from "../../types";
import callApi from "../callApi";

interface ApiOutput {
  success: boolean;
  data: Artwork[];
}
const requiredFields = [
  "id",
  "title",
  "image_id",
  "date_display",
  "artist_display",
  "place_of_origin",
  "short_description",
  "description",
  "thumbnail",
].toString();

const getArtworksList = async (page: number, searchQuery = "" as string): Promise<ApiOutput> =>
  await callApi<ApiOutput>(
    `v1/artworks?fields=${requiredFields}&search?q=${searchQuery}&page=${page}`,
    "get",
    {},
    "Error retrieving artworks list 🤔",
  );

export default getArtworksList;
