import React from 'react';

import { images } from '../../constants';

import { SubHeading } from '../../components';

import styled from 'styled-components';

const Container = styled.div``

const Left = styled.div``

const Heading = styled.div`
  margin-bottom: 3rem;
`

const Content = styled.div``

const ContentText = styled.p``;

const Button = styled.button`
  margin-top: 2rem;
`

const Right = styled.div``

const Image = styled.img``

const FindUs = () => (
  <Container className='app__bg app__wrapper section__padding' id='contact'>
    <Left className='app__wrapper_info'>
      <SubHeading title='Contact' />
      <Heading className='headtext__cormorant'>Find Us</Heading>
      <Content>
        <ContentText className='p__opensans'>331 Hill Street, 331 Hill Street, OH, Ohio. 43537.</ContentText>
        <ContentText className='p__cormorant' style={{margin: '2rem 0'}}>Opening Hours</ContentText>
        <ContentText className='p__opensans'>Weekdays: 10:00am - 04:00am</ContentText>
        <ContentText className='p__opensans'>Weekends: 10:00am - 12:00am</ContentText>
      </Content>
      <Button className='custom__button'>View Us</Button>
    </Left>

    <Right className='app__wrapper_img'>
      <Image src={images.findus} />
    </Right>
  </Container>
);

export default FindUs;
