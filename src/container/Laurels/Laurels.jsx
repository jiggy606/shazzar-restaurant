import React from 'react';

import { images, data } from '../../constants';

import { SubHeading } from '../../components';

import styled from 'styled-components';

const Container = styled.div``
const Info = styled.div``
const ImageContainer = styled.div``
const InfoHeading = styled.h1`` 
const LaurelsContainer = styled.div``
const AwardsCard = styled.div``
const AwardsCardImg = styled.img``

// awardcard will only be used here hence no need to create as a component and import
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
  <AwardsCard>
    <AwardsCardImg src={imgUrl} alt='aaa' />
  </AwardsCard>
}

const Laurels = () => (
  <Container className='app__bg app__wrapper section__padding' id='awards'>
    <Info>
      <SubHeading title='Awards and Recognition' />
      <InfoHeading className='headtext__cormorant'>Our Laurels</InfoHeading>

      <LaurelsContainer>
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </LaurelsContainer>
    </Info>

    <ImageContainer></ImageContainer>
  </Container>
);

export default Laurels;
