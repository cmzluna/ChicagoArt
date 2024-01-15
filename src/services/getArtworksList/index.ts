import { type Artwork } from "../../types";
import callApi from "../callApi";

interface ApiOutput {
  success: boolean;
  data: Artwork[];
}

const getArtworksList = async (): Promise<ApiOutput> =>
  await callApi<ApiOutput>(
    "v1/artworks?fields=id,title,artist_display,date_display,main_reference_number",
    "get",
    {},
    "Error retrieving artworks list 🤔",
  );

export default getArtworksList;
