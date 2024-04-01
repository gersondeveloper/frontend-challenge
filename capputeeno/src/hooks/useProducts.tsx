import { ProductsFetchResponse } from "@/context/types/products-fetch-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { mountQuery } from "@/utils/graphql-filters";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  const result = axios.post(API_URL, { query });
  return result;
};

export function useProducts() {
  const { type, priority, search } = useFilter();
  const query = mountQuery(type, priority);
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ["products", type, priority],
  });

  const products = data?.data?.data?.allProducts;

  const filteredProducts = products?.filter((product) =>
    product.name.includes(search)
  );

  return {
    data: filteredProducts,
  };
}
