import React from 'react';

import { images } from '../../constants'

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 6rem;

  position: relative;
`

const BgImgContainer = styled.div`
  position: absolute;
  inset: 0;
`

const BgImg = styled.img`
  width: 391px;
  height: 415px;
  z-index: 0;
`

const ContainerContent = styled.div`
  width: 100%;
  z-index: 2;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`

const ContainerAbout = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  text-align: right;
`

const History = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
`

const HeadText = styled.h1``

const ContainerContentImg = styled.img``

const AboutText = styled.p`
  margin: 2rem 0;
  color: var(--color-grey);

  @media screen and (max-width: 2000px) {
    margin: 4rem 0;
  }
`

const HistoryText = styled.p`
  margin: 2rem 0;
  color: var(--color-grey);

  @media screen and (max-width: 2000px) {
    margin: 4rem 0;
  }
`

const ContainerContentButton = styled.button`
  background-color: var(--color-crimson);
  color: var(--color-black);
  font-family: var(--font-base);
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 28px;
  font-size: 16px;
  padding: 0.5rem 1.5rem;
  border-radius: 1px;
  border: none;
  outline: none;
  cursor: pointer;
`

const AboutUsKnife = styled.div`
  margin: 2rem 4rem;

  @media screen and (max-width: 900px) {
    margin: 4rem 0;
  }
`

const KnifeImg = styled.img`
  height: 910px;

  @media screen and (max-width: 2000px) {
    height: 1110px;
  }

  @media screen and (max-width: 650px) {
    width: 80%;
    height: 320px;
  }
`

const AboutUs = () => (
  <Container className='app__bg' id='about'>
    <BgImgContainer className='flex__center'>
      <BgImg src={images.G} />
    </BgImgContainer>

    <ContainerContent className='flex__center'>
      <ContainerAbout>
        <HeadText className='headtext__cormorant'>About Us</HeadText>
        <ContainerContentImg src={images.spoon} className='spoon__img' />
        <AboutText className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</AboutText>
        <ContainerContentButton type='button'>Know More</ContainerContentButton>
      </ContainerAbout>

      <AboutUsKnife className='flex__center'>
        <KnifeImg src={images.knife} />
      </AboutUsKnife>

      <History>
        <HeadText className='headtext__cormorant'>Our History</HeadText>
        <ContainerContentImg src={images.spoon} className='spoon__img' />
        <HistoryText className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</HistoryText>
        <ContainerContentButton type='button'>Know More</ContainerContentButton>
      </History>
    </ContainerContent>
  </Container>
);

export default AboutUs;
