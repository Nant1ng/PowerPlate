import Link from "next/link";
import styled from "styled-components";

const Footer = styled.footer`
  position: absolute;
  width: 100vw;
  background-color: #eae7e0;
  bottom: 0;
`;

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
`;

const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  justify-content: space-evenly;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3rem;
  color: #4a4a4a;
`;

const TextFirstRow = styled.a`
  cursor: pointer;
  margin-bottom: 1rem;
  color: #4a4a4a;
  :hover {
    color: #000000;
  }
`;

const Text = styled.h5`
  cursor: pointer;
  color: #4a4a4a;
  :hover {
    color: #000000;
  }
`;

const Underline = styled.a`
  margin-left: 0.3rem;
  color: #4a4a4a;
  text-decoration: underline;
  cursor: pointer;
  :hover {
    color: #000000;
  }
`;

function index() {
  return (
    <Footer>
      <Conatiner>
        <FirstRow>
          <TextFirstRow>SHOP ALL</TextFirstRow>
          <TextFirstRow>NUTRITIONS</TextFirstRow>
          <TextFirstRow>CLOTHES</TextFirstRow>
          <TextFirstRow>ABOUT</TextFirstRow>
          <TextFirstRow>CONTACT</TextFirstRow>
        </FirstRow>
        <Row>
          <Text>TERMS AND CONDITIONS</Text>
        </Row>
        <Row>
          Copyright © 2023,
          <Link href="/" legacyBehavior>
            <Underline>Power Plate Nutrition.</Underline>
          </Link>
        </Row>
      </Conatiner>
    </Footer>
  );
}

export default index;
