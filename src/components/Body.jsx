import React from 'react';
import styled from 'styled-components';
import HeroTable from '../assets/hero-tablet.png';
import Money from '../assets/grow-money-graph-1x.png'
import Phone from '../assets/phone-goals.png'
import { MdKeyboardArrowRight } from 'react-icons/md';

const SectionBackground = styled.section`
  background-image: url(${Money});
  height: 785px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Section = styled.section`
  background-image: url(${HeroTable});
  height: 785px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;

`;

const PhoneDiv = styled.div`
  background-image: url(${Phone});
  height: 785px;
  padding-left: 800px;
  position: relative;
  float: right;
  background-repeat: no-repeat;
  background-size: contain;

`;
const Content = styled.div`
  width: 100%;
  height: 100px;
`;

const Left = styled.div`
  padding-left: 220px;
  padding-top: 143px;
  position: relative;
  float: left;
`;

const Title = styled.p`
  font-size: 30px;
  color: #04050a;
  font-weight: 400;
  
`;

const Desc = styled.p`
  width: 472px;
  font-size: 20px;
  position: relative;
  float: left;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 358px;
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 398px;
  position: relative;
  float: left;
  width: 371px;
  height: 71px;
  line-height: 71px;
  font-size: 22px;
  text-align: right;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(90deg, #0546d6, #3f89fc);
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`;

const Hero = () => {
  return (
<SectionBackground>
    <Section>
      <Content>
        <Left>
          <Title>
            Cotizador de criptomonedas <br /> invierte en criptomonedas!
          </Title>
          <Desc>
            Te ayudamos a invertir en criptomonedas, generando un buen retorno de estas puedes comprar y vender <span> BITCOIN, ETHERIUM, BTC</span>{' '}
            cotiza ahora!
          </Desc>
          <Button href='http://localhost:8080/' target='_blank'>
            <span>saber más</span>
            <MdKeyboardArrowRight />
          </Button>
        </Left>
        <PhoneDiv></PhoneDiv>
      </Content>
    </Section>
    </SectionBackground>

  );
};

export default Hero;
