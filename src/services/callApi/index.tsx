import axios from "axios";
import { showToast } from "@utils/ShowToast";

export default async function callApi<T>(
  url: string,
  method: string,
  dataRequest: object,
  errorMessage: string,
): Promise<any> {
  const requestConfig = {
    baseURL: "https://api.artic.edu/api/",
    url,
    data: dataRequest,
    method,
    // headers: {
    //   "x-api-key": "API_KEY",
    // },
  };

  try {
    const { data } = await axios.request<{ data: T }>(requestConfig);
    console.log("data ===> ", data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      showToast(errorMessage, "error");
      return await Promise.reject(error.response.data);
    }
  }
}
