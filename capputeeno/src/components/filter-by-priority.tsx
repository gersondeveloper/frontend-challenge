import { ArrowDownIcon } from "@/assets/icons/arrow-down-icon";
import { PriorityType } from "@/context/types/priority-types";
import { useFilter } from "@/hooks/useFilter";
import React, { useState } from "react";
import styled from "styled-components";

interface FilterByPriorityProps {}

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    border: none;
    background: transparent;
    cursor: pointer;

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 16px;
    }
  }
`;

const PriorityFilter = styled.ul`
  position: absolute;
  width: 250px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 12px 16px;
  z-index: 999;

  list-style: none;

  top: 100%;
  right: 8px;

  li {
    color: var(--text-dark);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`;

export default function FilterByPriority(props: FilterByPriorityProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority } = useFilter();

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleUpdatePriority = (value: PriorityType) => {
    setPriority(value);
    setIsOpen(false);
  };

  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por
        <ArrowDownIcon />
      </button>
      {isOpen && (
        <PriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityType.NEWS)}>
            Novidades
          </li>
          <li onClick={() => handleUpdatePriority(PriorityType.MAJOR_PRICE)}>
            Preço: Maior - Menor
          </li>
          <li onClick={() => handleUpdatePriority(PriorityType.MINOR_PRICE)}>
            Preço: Menor - Maior
          </li>
          <li onClick={() => handleUpdatePriority(PriorityType.POPULAR)}>
            Mais vendidos
          </li>
        </PriorityFilter>
      )}
    </FilterContainer>
  );
}
