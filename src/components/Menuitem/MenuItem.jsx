import React from 'react';

import styled from 'styled-components';

const Container = styled.div``

const Head = styled.div``

const Name = styled.div``

const NameText = styled.p`
  color: #DCCA87;
`

const Price = styled.div``

const PriceText = styled.p`
  color: #fff;
`

const MenuItem = ({ title, price, tags }) => (
  <Container>
    <Head>
      <Name>
        <NameText className='p__comorant'>
          {title}
        </NameText>
      </Name>

      <Price>
        <PriceText className='p__comorant'>
          {price}
        </PriceText>
      </Price>
    </Head>
  </Container>
);

export default MenuItem;
