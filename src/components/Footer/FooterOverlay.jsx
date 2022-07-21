import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  position: absolute;
`

const Content = styled.div`
  height: 25%;
  background: var(--color-black);
`

const ImgDiv = styled.div`
  height: 75%;
`

const FooterOverlay = () => (
  <Container>
    <Content />
    <ImgDiv className='app__bg' />
  </Container>
);

export default FooterOverlay;
