import React from 'react';

import styled from 'styled-components';

import SubHeading from '../SubHeading/SubHeading';

const Container = styled.div`
  padding: 2rem 4rem;
  border: 1px solid var(--color-golden);
  background: var(--color-black);
  margin-top: 3rem;

  @media screen and (max-width: 650px) {
    padding: 2rem 0;
    border: none;
  }
`

const Heading = styled.div`
  text-align: center;
`

const HeadingHeader = styled.h1`
  @media screen and (max-width: 330px) {
    font-size: 32px;
    line-height: 50px;
  }
`
const HeadingText = styled.p``

const Inputs = styled.div`
  flex-direction: row;
  margin-top: 3rem;

  @media screen and (max-width: 990px) {
    flex-direction: column;
    width: 100%;
  }
`

const Input = styled.input`
  width: 620px;
  border: 1px solid var(--color-golden);
  border-radius: 5px;
  font-size: 1rem;
  font-family: var(--font-base);
  color: var(--color-white);
  margin-right: 2rem;
  padding: 0.75rem 1rem;
  background: var(--color-black);

  @media screen and (min-width: 2000px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 990px) {
    margin: 0 0 2rem 0;
    width: 100%;
  }
`

const Button = styled.button`
  width: max-content;
`

const Newsletter = () => (
  <Container> {/* app__newsletter */}
    <Heading> {/* app__newsletter-heading */}
      <SubHeading title='Newsletter' />
      <HeadingHeader className='headtext__cormorant'>Subscribe To Our Newsletter</HeadingHeader>
      <HeadingText className='p__opensans'>And Never Miss Latest Updates!</HeadingText>
    </Heading>

    <Inputs className='flex__center'> {/* app__newsletter-input */}
      <Input type='email' placeholder='Enter your email' />
      <Button className='custom__button'>Subscribe</Button>
    </Inputs>
  </Container>
);

export default Newsletter;
