import React from 'react';

import { useRef, useState } from 'react';

import styled from 'styled-components';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';

const Container = styled.div`
  height: 100vh;
  position: relative;
`
const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
`
const OverlayCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid var(--color-golden);
  cursor: pointer;
`

const Intro = () => {

  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef()

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <Container> {/* app__video */}
      <Video src={meal} type='video/mp4' loop controls={false} muted ref={vidRef} />

      <Overlay className='flex__center'> {/* app__video-overlay */}
        <OverlayCircle className='flex__center' onClick={handleVideo}> {/* app__video-overlay-circle */}
          {playVideo ? <BsPauseFill color='#fff' fontSize={30} /> : <BsFillPlayFill color='#fff' fontSize={30} />}
        </OverlayCircle>
      </Overlay>
    </Container>
  );
};

export default Intro;
