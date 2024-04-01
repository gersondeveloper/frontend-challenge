"use client";

import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "./product-card";
import styled from "styled-components";

interface ProductsListProps {}

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 32px;
  max-width: 100%;
  margin-top: 32px;
`;

export function ProductsList(props: ProductsListProps) {
  const { data } = useProducts();

  return (
    <ListGrid>
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          image={product.image_url}
          price={product.price_in_cents}
        ></ProductCard>
      ))}
    </ListGrid>
  );
}
