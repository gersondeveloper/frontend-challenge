import { ProductsFetchResponse } from "@/context/types/products-fetch-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
  const result = axios.post(API_URL, {
    query: `query{
        allProducts{
          id,
          name,
          price_in_cents,
          image_url
        }
      }`,
  });
  return result;
};

export function useProducts() {
  const { data } = useQuery({
    queryFn: () => fetcher(),
    queryKey: ["products"],
  });

  return {
    data: data?.data?.data?.allProducts,
  };
}
