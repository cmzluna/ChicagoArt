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

const searchArtworksByQuery = async (
  page = 1 as number,
  searchQuery = "" as string,
): Promise<ApiOutput> =>
  await callApi<ApiOutput>(
    `v1/artworks/search?q=${searchQuery}?&fields=${requiredFields}&page=${page}`,
    "get",
    {},
    "Error retrieving artworks list 🤔",
  );

export default searchArtworksByQuery;
