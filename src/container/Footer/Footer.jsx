import React from 'react';

import gericht from '../../assets/gericht.png';
import spoon from '../../assets/spoon.png';
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

  @media screen and (max-width: 650px) {
    padding: 0 0 2rem 0;
  }
`

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 5rem;
  padding: 0 2rem;

  @media screen and (max-width: 1150px) {
    align-items: center;
    flex-direction: column;
    padding: 0
  }
`

const Contact = styled.div`
  flex: 1;
  margin: 1rem;
  text-align: center;

  @media screen and (max-width: 1150px) {
    margin: 2rem 0;
    width: 100%;
  }
`

const ContactHead = styled.h1`
  font-family: var(--font-base);
  color: var(--color-white);
  font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  font-size: 32px;
  line-height: 41.6px;
  margin-bottom: 1rem;

  @media screen and (min-width: 2000px) {
    font-size: 51px;
    line-height: 61%;
  }
`

const ContactDetail = styled.p``

const Logo = styled.div`
  flex: 1;
  margin: 1rem;
  text-align: center;

  @media screen and (max-width: 1150px) {
    margin: 2rem 0;
    width: 100%;
  }
`

const GerichtImage = styled.img`
  width: 210px;
  margin-bottom: 0.75rem;

  @media screen and (max-width: 350px) {
    width: 80%;
  }
`

const LogoText = styled.p``

const SpoonImg = styled.img`
  margin-top: 15px;
  text-align: center;
`

const Icons = styled.div`
  margin-top: 0.5rem;
`

const Time = styled.div`
  flex: 1;
  margin: 1rem;
  text-align: center;

  :nth-child(2n + 1) {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 1150px) {
    margin: 2rem 0;
    width: 100%;
  }
`

const Copyright = styled.div`
  margin-top: 3rem
`

const CopyrightText = styled.p``

const Footer = () => (
  <Container className='section__padding'> {/* app__footer */}
    <Newsletter />

    <Content> {/* app_footer-links */}
      <Contact> {/* app_footer-links-contact */}
        <ContactHead>Contact Us</ContactHead> {/* app__footer-headtext */}
        <ContactDetail className='p__opensans'>13 D 34 Cavera, 6th Avenue, FST 102301, NGR</ContactDetail>
        <ContactDetail className='p__opensans'>+2345678901</ContactDetail>
        <ContactDetail className='p__opensans'>+1098765432</ContactDetail>
      </Contact> 
      <Logo> {/* app_footer-links-logo */}
        <GerichtImage src={gericht} />
        <LogoText className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others."</LogoText>
        <SpoonImg src={spoon} className='spoon__img' />
        <Icons> {/* app__footer-links-icons */}
          <FiFacebook style={{color:'#fff', margin:'0.5rem', fontSize:'24px', cursor:'pointer', textAlign:'center'}} />
          <FiTwitter style={{color:'#fff', margin:'0.5rem', fontSize:'24px', cursor:'pointer'}} />
          <FiInstagram style={{color:'#fff', margin:'0.5rem', fontSize:'24px', cursor:'pointer'}} />
        </Icons>
      </Logo>
      <Time> {/* app_footer-links-work */}
        <ContactHead>Working Hours</ContactHead> {/* app__footer-headtext */}
        <ContactDetail className='p__opensans'>Monday - Friday</ContactDetail>
        <ContactDetail className='p__opensans'>10:00am - 04:00am</ContactDetail>
        <ContactDetail className='p__opensans'>Saturday - Sunday</ContactDetail>
        <ContactDetail className='p__opensans'>10:00am - 12:00am</ContactDetail>
      </Time>
    </Content>

    <Copyright> {/* footer__copyright */}
      <CopyrightText className='p__opensans'>2022 Geritch. All Rights Reserved</CopyrightText>
    </Copyright>
  </Container>
);

export default Footer;
