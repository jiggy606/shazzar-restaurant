import React, { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdImageSearch, MdOutlineRestaurantMenu } from 'react-icons/md';

import Logo from '../../assets/gericht.png';

import styled from 'styled-components';

const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-black);
  padding: 1rem 2rem;

  @media screen and (max-width: 650px) {
    padding: 1rem;
  }
`

const NavLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Image = styled.img`
  width: 150px;

  @media screen and (max-width: 2000px) {
    width: 210px;
  }

  @media screen and (max-width: 650px) {
    width: 110px;
  }
`

const Links = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  list-style-type: none;

  @media screen and (max-width: 1150px) {
    display: none;
  }
`

const LinksItems = styled.li`
  margin: 0 1rem;
  cursor: pointer;

  &:hover {
    color: var(--color-grey);
  }
`

const LinksAddress = styled.a``

const Login = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 650px) {
    display: none;
  }
`

const LoginLink = styled.a`
  margin: 0 1rem;
  text-decoration: none;
  transition: 0.5s ease;

  &:hover {
    border-bottom: 1px solid var(--color-golden);
  }
`

const Demarcation = styled.div`
  width: 1px;
  height: 30px;
  background-color: var(--color-grey);
`

const Bookings = styled.a`
  margin: 0 1rem;
  text-decoration: none;
  transition: 0.5s ease;

  &:hover {
    border-bottom: 1px solid var(--color-golden);
  }
`

const Responsive = styled.div`
  display: none;

  @media screen and (max-width: 1150px) {
    display: flex;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-black);
  transition: 0.5s ease;
  flex-direction: column;
  zIndex: 5;
`

const OverlayClose = styled.div`
  font-size: 27px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  color: var(--color-golden);
`

const ResponsiveLinks = styled.ul`
  list-style: none;
`

const RLinksItems = styled.li`
  margin: 2rem;
  cursor: pointer;
  color: var(--color-golden);
  font-size: 2rem;
  text-align: center;
  font-family: var(--font-base);

  &:hover {
    color: var(--color-white);
  }
`

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Container> {/* app__navbar */}
      <NavLogo> {/* app__navbar_logo */}
        <Image src={Logo} />
      </NavLogo>

      <Links> {/* app__navbar_links */}
        <LinksItems className='p__opensans'>
          <LinksAddress href='#home'>Home</LinksAddress>
        </LinksItems>
        <LinksItems className='p__opensans'>
          <LinksAddress href='#about'>About</LinksAddress>
        </LinksItems>
        <LinksItems className='p__opensans'>
          <LinksAddress href='#menu'>Menu</LinksAddress>
        </LinksItems>
        <LinksItems className='p__opensans'>
          <LinksAddress href='#awards'>Awards</LinksAddress>
        </LinksItems>
        <LinksItems className='p__opensans'>
          <LinksAddress href='#contacts'>Contact</LinksAddress>
        </LinksItems>
      </Links>

      <Login> {/* app__navbar_login */}
        <LoginLink href='#login' className='p__opensans'> Login / Register </LoginLink>
        <Demarcation />
        <Bookings href='/' className='p__opensans'>Book Table</Bookings>
      </Login>

      <Responsive> {/* app__navbar_smallscreen */}
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <Overlay className='flex__center slide-bottom'>
            <OverlayClose>
              <MdOutlineRestaurantMenu fontSize={27} onClick={() => setToggleMenu(false)} />
            </OverlayClose>
            <ResponsiveLinks> {/* app__navbar_smallscreen_links */}
              <RLinksItems className='p__opensans'>
                <LinksAddress href='#home'>Home</LinksAddress>
              </RLinksItems>
              <RLinksItems className='p__opensans'>
                <LinksAddress href='#about'>About</LinksAddress>
              </RLinksItems>
              <RLinksItems className='p__opensans'>
                <LinksAddress href='#menu'>Menu</LinksAddress>
              </RLinksItems>
              <RLinksItems className='p__opensans'>
                <LinksAddress href='#awards'>Awards</LinksAddress>
              </RLinksItems>
              <RLinksItems className='p__opensans'>
                <LinksAddress href='#contacts'>Contact</LinksAddress>
              </RLinksItems>
            </ResponsiveLinks>
          </Overlay>
        )}  

      </Responsive>
    </Container>
  );
}

export default Navbar
