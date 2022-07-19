import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Name = styled.div`
  flex: 1;
`

const NameText = styled.p`
  color: #DCCA87;
`

const Dash = styled.div`
  width: 100%;
  height: 1px;
  background: var(--color-golden);
  margin: 0 1rem;
`

const Price = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

const PriceText = styled.p`
  color: #fff;
`

const Sub = styled.div`
  width: 100%;
  margin-top: 0.2rem;
`

const SubText = styled.p`
  color: #AAA;
`

const MenuItem = ({ title, price, tags }) => (
  <Container> {/* app__menuItem */}
    <Head> {/* app__menuItem-head */}
      <Name> {/* app__menuItem-name */}
        <NameText className='p__comorant'>
          {title}
        </NameText>
      </Name>

      <Dash /> {/* app__menuItem-dash */}

      <Price>
        <PriceText className='p__comorant'>
          {price}
        </PriceText>
      </Price>
    </Head>

    <Sub> {/* app__menuItem-sub */}
      <SubText className='p__opensans'>
        {tags}
      </SubText>
    </Sub>
  </Container>
);

export default MenuItem;
