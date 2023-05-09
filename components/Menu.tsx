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
  margin-bottom: 1rem;
  color: #4a4a4a;
  cursor: pointer;
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
