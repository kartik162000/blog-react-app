import axios from "axios";
import {
  BACKEND_URL,
  GET_BLOG_DATA,
  UPDATE_BLOG_DATA,
} from "../../../constants/apiEndPoints";
import makeRequest from "..";

jest.mock("axios");
describe("makeRequest", () => {
  it("should make an api call with appropriate request options and return response body when only api endpoint is specified", async () => {
    axios.mockResolvedValue({
      data: {
        id: 1,
        title: "title",
        description: "description",
        image: "https://i.ibb.co/V38cHQ3/young-painters.png",
        readingTime: "2mins",
        liked: false,
        claps: 0,
      },
    });
    expect(axios).not.toBeCalled();
    const response = await makeRequest(GET_BLOG_DATA);
    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: "blog-posts",
      method: "get",
    });
    expect(response).toEqual({
      id: 1,
      title: "title",
      description: "description",
      image: "https://i.ibb.co/V38cHQ3/young-painters.png",
      readingTime: "2mins",
      liked: false,
      claps: 0,
    });
  });
  it("should make api call with appropriate request options and return response body when api endpoint and request body is specified", async () => {
    axios.mockResolvedValue({ data: { data: { claps: 1 } } });
    expect(axios).not.toBeCalled();
    const response = await makeRequest(UPDATE_BLOG_DATA(1), {
      data: { claps: 1 },
    });
    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: "blog-posts/1",
      method: "put",
      data: { claps: 1 },
    });
    expect(response).toEqual({ data: { claps: 1 } });
  });
  it("Should navigate to error page when api call return error status code", async () => {
    const mockNavigate = jest.fn();
    axios.mockRejectedValue({
      response: {
        status: 500,
      },
    });
    expect(mockNavigate).not.toBeCalled();
    await makeRequest(GET_BLOG_DATA, {}, mockNavigate);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("error/500");
  });

  it("Should navigate to error page when api call return error status code not present", async () => {
    const mockNavigate = jest.fn();
    axios.mockRejectedValue({});
    expect(mockNavigate).not.toBeCalled();
    await makeRequest(GET_BLOG_DATA, {}, mockNavigate);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("error");
  });
});
