import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ShoppingCartIcon } from "../assets/icons/shopping-cart-icon";
import styled from "styled-components";

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  padding: 0 5px;
  font-size: 10px;

  background-color: var(--delete-color);
  color: white;

  margin-left: -10px;
`;

const Container = styled.div`
  position: relative;
`;

export function CartBadgeControl() {
  const { value } = useLocalStorage("cart-items", []);

  return (
    <Container>
      <ShoppingCartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  );
}
