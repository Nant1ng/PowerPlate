import Link from "next/link";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import { FaCcStripe, FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { IconContext } from "react-icons";

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
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
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

const Socials = styled.div`
  display: flex;
`;

const PaymentMethod = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 10rem;
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
        <FirstRow>
          <Socials>
            <SocialIcon
              url="https://www.youtube.com/"
              fgColor="transparent"
              bgColor="#4a4a4a"
              style={{ width: "2rem", height: "2rem", marginRight: "0.5rem" }}
            />
            <SocialIcon
              url="https://www.instagram.com/"
              target="_blank"
              fgColor="transparent"
              bgColor="#4a4a4a"
              style={{ width: "2rem", height: "2rem", marginRight: "0.5rem" }}
            />
            <SocialIcon
              url="https://twitter.com/"
              target="_blank"
              fgColor="transparent"
              bgColor="#4a4a4a"
              style={{ width: "2rem", height: "2rem", marginRight: "0.5rem" }}
            />
            <SocialIcon
              url="https://github.com/Nant1ng"
              target="_blank"
              fgColor="transparent"
              bgColor="#4a4a4a"
              style={{ width: "2rem", height: "2rem", marginRight: "0.5rem" }}
            />
          </Socials>
          <div>
            Copyright © 2023,
            <Link href="/" legacyBehavior>
              <Underline>Power Plate Nutrition.</Underline>
            </Link>
          </div>
          <PaymentMethod>
            <IconContext.Provider value={{ color: "#4a4a4a", size: "2rem" }}>
              <FaCcStripe />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#4a4a4a", size: "2rem" }}>
              <FaCcMastercard />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#4a4a4a", size: "2rem" }}>
              <FaCcVisa />
            </IconContext.Provider>
          </PaymentMethod>
        </FirstRow>
      </Conatiner>
    </Footer>
  );
}

export default index;
