"use client";

import { FilterBar } from "@/components/filter-bar";
import { ProductsList } from "@/components/products-list";
import styled from "styled-components";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  background-color: var(--bg-primary);
  min-height: 100vh;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 34px 160px;
  }
`;

export default function Home() {
  return (
    <PageWrapper>
      <FilterBar />
      <ProductsList />
    </PageWrapper>
  );
}
