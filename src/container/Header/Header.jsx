import React from 'react';

import { images } from '../../constants'

import styled from 'styled-components';

import SubHeading from '../../components/SubHeading/SubHeading';

const Container = styled.div`
  background-color: var(--color-black);
  padding: 4rem 6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: 100vh;
`

const Left = styled.div``

const Header1 = styled.h1`
  font-family: var(--font-base);
  color: var(--color-golden);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  line-height: 117px;
  font-size: 90px;
  flex: 1;
`
const LeftText = styled.p`
  margin: 2rem 0;
`

const LeftButton = styled.button`
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

const Right = styled.div``

const RightImage = styled.img`
  width: 80%;
`

const Header = () => (
  <Container id='home'>
    <Left>
      <SubHeading title='Chase the new flavor' />
      <Header1>The Key to Fine Dining</Header1>
      <LeftText className='p__opensans'>Zit telluz zed zebenrit vivamiz molezitle. Condiemnum voluptat morbi faciliz quam scelerique sapien. Et, penebalius aliqpiam amet telilurs</LeftText>
      <LeftButton type='button'>Explore Our Menu</LeftButton>
    </Left>

    <Right>
      <RightImage src={images.welcome} />
    </Right>
  </Container>
);

export default Header;
