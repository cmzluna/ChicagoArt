import { type Artwork } from "../../types";
import callApi from "../callApi";

interface ApiOutput {
  success: boolean;
  data: Artwork[];
}

const getArtworkById = async ({ id }): Promise<ApiOutput> =>
  await callApi<ApiOutput>(
    `v1/artworks/${id}`,
    "get",
    {},
    "Error retrieving artwork information 🤔",
  );

export default getArtworkById;
