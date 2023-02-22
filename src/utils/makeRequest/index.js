import axios from "axios";
import { BACKEND_URL } from "../../constants/apiEndPoints";

const makeRequest = async (
  apiEndPoint = { url: "", method: "" },
  dynamicConfig = {}
) => {
  const requestDetails = {
    baseURL: BACKEND_URL,
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    ...dynamicConfig,
  };
  const { data } = await axios(requestDetails);
  console.log(data);
  return data;
};

export default makeRequest;
