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
  "description",
  "thumbnail",
].toString();

const featuredQuery: string = `search?query[term][is_public_domain]=true&[is_boosted]=true&limit=1&fields=${requiredFields}`;

const getFeaturedArtwork = async (): Promise<ApiOutput> =>
  await callApi<ApiOutput>(
    `v1/artworks/${featuredQuery}`,
    "get",
    {},
    "Error retrieving artwork information 🤔",
  );

export default getFeaturedArtwork;
