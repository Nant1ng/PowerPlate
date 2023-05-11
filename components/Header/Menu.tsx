import styled from "styled-components";

const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #faf9f6;
`;

const Conatiner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem 0;
`;

const MenuText = styled.h2`
  margin-bottom: 1.5rem;
  color: #4a4a4a;
  cursor: pointer;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000000;
    transform-origin: center;
    transition: transform 0.25s ease-out;
  }
  :hover::after {
    transform: scaleX(1);
    transform-origin: center;
  }
  :hover {
    color: #000000;
  }
`;

function Menu() {
  return (
    <Background>
      <Conatiner>
        <MenuText>HOME</MenuText>
        <MenuText>SHOP ALL</MenuText>
        <MenuText>NUTRITONS</MenuText>
        <MenuText>CLOTHES</MenuText>
        <MenuText>ABOUT</MenuText>
        <MenuText>CONTACT</MenuText>
      </Conatiner>
    </Background>
  );
}

export default Menu;
