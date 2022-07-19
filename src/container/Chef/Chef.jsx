import React from 'react';

import images from '../../constants/images'
import styled from 'styled-components';

import { SubHeading } from '../../components';

const MajContainer = styled.div``

const MinContainer = styled.div``

const Image = styled.img``

const Info = styled.div``

const HeadText = styled.h1``

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5rem;
`

const Quote = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`

const QuoteImg = styled.img`
  height: 40px;
  width: 47px;
  margin: 0 1rem 1rem 0;
`

const QuoteText = styled.p``

const Sign = styled.div`
  width: 100%;
  margin-top: 3rem;
`

const SignName = styled.p`
  color: var(--color-golden);
  font-family: var(--font-base);
  font-weight: 400;
  font-size: 32;
  line-height: 41px;
  letter-spacing: 0.04em;
  text-transform: capitalize;
`

const SignInfo = styled.p``

const SignImg = styled.img`
  width: 250px;
  margin-top: 3rem;

  @media screen and (max-width: 2000px) {
    width: 370px;
  }

  @media screen and (max-width: 450px) {
    width: 80%;
  }
`

const Chef = () => (
  <MajContainer className='app__bg app__wrapper section__padding'>
    <MinContainer className='app__wrapper_img app__wrapper_img-reverse'>
      <Image src={images.chef} />
    </MinContainer>

    <Info className='app__wrapper_info'>
      <SubHeading title="Chef's work" />
      <HeadText className='headtext__cormorant'>What We Believe In</HeadText>

      <Content>
        <Quote>
          <QuoteImg src={images.quote} />
          <QuoteText className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</QuoteText>
        </Quote>
        <QuoteText className='p__opensans'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</QuoteText>
      </Content>

      <Sign>
        <SignName>Daniel Iberi</SignName>
        <SignInfo className='p__opensans'>Chef & Founder</SignInfo>
        <SignImg src={images.sign} />
      </Sign>
    </Info>
  </MajContainer>
);

export default Chef;
