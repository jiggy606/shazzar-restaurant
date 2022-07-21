import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { Newsletter } from '../../components';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 0;
  background: var(--color-black);
`

const Content = styled.div``

const Contact = styled.div``

const Logo = styled.div``

const Time = styled.div``

const Copyright = styled.div``

const CopyrightText = styled.p``

const Footer = () => (
  <Container className='section__padding'> {/* app__footer */}
    <Newsletter />

    <Content> {/* app_footer-links */}
      <Contact> {/* app_footer-links-contact */}

      </Contact> 
      <Logo> {/* app_footer-links-logo */}

      </Logo>
      <Time> {/* app_footer-links-work */}

      </Time>
    </Content>

    <Copyright> {/* footer__copyright */}
      <CopyrightText className='p__opensans'>2022 Geritch. All Rights Reserved</CopyrightText>
    </Copyright>
  </Container>
);

export default Footer;
