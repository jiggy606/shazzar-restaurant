import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { Newsletter, FooterOverlay } from '../../components';

import styled from 'styled-components';

const Container = styled.div``

const Footer = () => (
  <Container className='section__padding'> {/* app__footer */}
    <FooterOverlay />
    <Newsletter />
  </Container>
);

export default Footer;
