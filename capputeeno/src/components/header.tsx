"use client";

import { Saira_Stencil_One } from "next/font/google";
import styled from "styled-components";
import { PrimaryInput, PrimaryInputWithSearchIcon } from "./primary-input";
import { CartBadgeControl } from "./cart-control";

const sairaStencilOne = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

interface HeaderProps {}

export function Header(props: HeaderProps) {
  const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;

    > div {
      display: flex;
      align-items: center;
      justify-center: center;
      gap: 24px;
    }
  `;

  const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
  `;

  return (
    <TagHeader>
      <Logo className={sairaStencilOne.className}>Capputeeno</Logo>
      <div>
        <PrimaryInputWithSearchIcon placeholder="Procurando por algo específico?" />
        <CartBadgeControl />
      </div>
    </TagHeader>
  );
}
