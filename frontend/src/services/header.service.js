import client from "@/graphql/client";
import { GET_HEADER_DATA } from "@/graphql/queries";

const fetchHeaderData = async () => {
  try {
    const response = await client.query({ query: GET_HEADER_DATA , fetchPolicy: "no-cache", });
    return response.data;
  } catch (error) {
    console.log("error", error);
    return {};
  }
};

export { fetchHeaderData };
