import axios from "axios";
import { BACKEND_URL } from "../../constants/apiEndPoints";

const makeRequest = async (
  apiEndPoint = { url: "", method: "" },
  dynamicConfig = {},
  navigate
) => {
  try {
    const requestDetails = {
      baseURL: BACKEND_URL,
      url: apiEndPoint.url,
      method: apiEndPoint.method,
      ...dynamicConfig,
    };
    const { data } = await axios(requestDetails);
    console.log(data);
    return data;
  } catch (e) {
    if (navigate) {
      const statusCode = e.response?.status;
      if (statusCode) {
        navigate(`error/${statusCode}`);
      } else navigate(`error`);
    }
  }
};

export default makeRequest;
