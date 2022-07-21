import React from 'react'

import { useRef } from 'react';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import { images } from '../../constants';

import { SubHeading } from '../../components';

import styled from 'styled-components';

const Galleryimages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: var(--color-black);
  padding: 4rem 0 4rem 6rem;

  @media and screen (max-width: 1150px) {
    flex-direction: column;
  }

  @media and screen (max-width: 850px) {
    padding: 4rem 0 4rem 4rem;
  }

  @media and screen (max-width: 650px) {
    padding: 4rem 0 4rem 2rem;
  }
`
const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  min-width: 500px;
  padding-right: 2rem;

  @media and screen (max-width: 2000px) {
    min-width: 1000px;
    padding-right: 4rem;
  }

  @media and screen (max-width: 650px) {
    min-width: 100%;
  }
` 

const ContentHeading = styled.h1``;

const ContentText = styled.p`
  color: #AAA;
  margin-top: 2rem;
`

const ContentButton = styled.button`
  margin-top: 1rem;

  @media and screen (max-width: 2000px) {
    margin-top: 2rem;
  }
`

const ImageGallery = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  max-width: 50%;
  position: relative;

  @media and screen (max-width: 1150px) {
    margin: 5rem 0;
    max-width: 100%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: max-content;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none; 

  ::-webkit-scrollbar {
    display: none;
  }
`

const ImageCard = styled.div`
  position: relative;
  min-width: 301px;
  height: 447px;
  margin-right: 2rem;

  @media and screen (max-width: 2000px) {
    max-width: 400px;
    height: 550px;
  }

  @media and screen (max-width: 650px) {
    min-width: 240px;
    height: 320px;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  transition: 0.5s ease;

  &:hover {
    opacity: 0.3;
  }

  &:hover {
    Instagram {
      opacity: 1;
    }
  }
`

const Instagram = styled.div`
  position: absolute;
  color: var(--color-white);
  font-size: 2rem;
  opacity: 0.5;
  transition: 0.5s ease;
  cursor: pointer;
`

const ImageArrow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: center;

  padding: 0 1rem;
  position: absolute;
  bottom: 5%;
`

const Arrow = styled.div`
  color: var(--color-golden);
  font-size: 2rem;
  cursor: pointer;
  background-color: var(--color-black);
  border-radius: 5px;

  &:hover {
    color: var(--color-white);
  }
`

const Gallery = () => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <Container className='flex__center'> {/* app__gallery */}
      <Content> {/* app__gallery-content */}
        <SubHeading title='Instagram' />
        <ContentHeading className='headtext__cormorant'>Photo Gallery</ContentHeading>
        <ContentText className='p__opensans'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.</ContentText>
        <ContentButton type='button' className='custom__button'>View More</ContentButton>
      </Content>

      <ImageGallery> {/* app__gallery-images */}
        <ImageContainer ref={scrollRef}> {/* app__gallery-images-container */}
          {Galleryimages.map((images, index) => (
            <ImageCard className='flex__center' key={`gallery_image-${index + 1}`}> {/* app__gallery-images-card */}
              <Image src={images} />
              <Instagram> {/* gallery__image_icon */}
                <BsInstagram />
              </Instagram>
            </ImageCard>
          ))}
        </ImageContainer>
        <ImageArrow> {/* app__gallery-images-arrows */}
          <Arrow> {/* gallery__arrow-icon */}
            <BsArrowLeftShort onClick={() => scroll('left')} />
          </Arrow>
          <Arrow> {/* gallery__arrow-icon */}
            <BsArrowRightShort onClick={() => scroll('right')} />
          </Arrow>
        </ImageArrow>
      </ImageGallery>
    </Container>
  );
}

export default Gallery
