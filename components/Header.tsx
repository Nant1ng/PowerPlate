import { useState } from "react";
import styled from "styled-components";
import { Fade as Hamburger } from "hamburger-react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const HeaderWrapper = styled.header`
  width: 100%;

  background-color: #ffffff;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 61.25rem;
  height: 5.875rem;
  margin: 0 auto;
`;

const MenuBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.125rem;
  height: 3.125rem;
  cursor: pointer;
`;

const Logo = styled.div`
  cursor: pointer;
`;

const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.125rem;
  height: 3.125rem;
  cursor: pointer;
`;

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Container>
        <MenuBtn>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={25}
            direction="right"
          />
        </MenuBtn>
        <Logo>
          <h1>POWER PLATE</h1>
        </Logo>
        <Cart>
          <AiOutlineShoppingCart size={30} />
        </Cart>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
