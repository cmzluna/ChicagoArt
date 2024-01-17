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

const getArtworksList = async (): Promise<ApiOutput> =>
  await callApi<ApiOutput>(
    `v1/artworks?fields=${requiredFields}`,
    "get",
    {},
    "Error retrieving artworks list 🤔",
  );

export default getArtworksList;
