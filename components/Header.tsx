import styled from "styled-components";
import { BiMenu } from "react-icons/bi";
import { GrMenu } from "react-icons/gr";
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
  return (
    <HeaderWrapper>
      <Container>
        <MenuBtn>
          <BiMenu size={30} />
        </MenuBtn>
        <Logo>
          <h1>Power Plate</h1>
        </Logo>
        <Cart>
          <AiOutlineShoppingCart size={30} />
        </Cart>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
