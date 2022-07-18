import React from 'react';

import { images } from '../../constants'

import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 1rem;
`

const Text = styled.p``

const Image = styled.img``

const SubHeading = ({title}) => (
  <Container>
    <Text className='p__cormorant'>{title}</Text>
    <Image src={images.spoon} />
  </Container>
);

export default SubHeading;
