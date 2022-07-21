import React from 'react';

import { images, data } from '../../constants';

import { SubHeading, MenuItem } from '../../components';

import styled from 'styled-components';

const Container = styled.div`
  flex-direction: column;
  background: var(--color-black);
`

const MenuTitle = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`

const MenuHeader = styled.div``

const Menu = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;

  @media screen and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`

const Left = styled.div`
  flex: 1;
  width: 100%;
  flex-direction: column;
`

const LeftText = styled.p`
  font-family: var(--font-base);
  font-weight: 600;
  font-size: 45px;
  line-height: 58.5px;
  letter-spacing: 0.04em;
  color: var(--color-white);

  @media screen and (max-width: 650px) {
    font-size: 35px;
    line-height: 48.5px;
  }
`

const LeftMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  width: 100%;
`

const Middle = styled.div`
  width: 410px;
  margin: 0 2rem;

  @media screen and (max-width: 650px) {
    width: 100%;
  }

  @media screen and (max-width: 1150px) {
    margin: 3rem 0;
  }

  @media screen and (max-width: 2000px) {
    width: 650px;
  }
`

const MiddleImg = styled.img`
  width: 100%;
  height: auto;

  @media screen and (max-width: 2000px) {
    height: 920px;
  }
`

const Right = styled.div`
  flex: 1;
  width: 100%;
  flex-direction: column;
`

const RightText = styled.p`
  font-family: var(--font-base);
  font-weight: 600;
  font-size: 45px;
  line-height: 58.5px;
  letter-spacing: 0.04em;
  color: var(--color-white);

  @media screen and (max-width: 650px) {
    font-size: 35px;
    line-height: 48.5px;
  }
`

const RightMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  width: 100%;
`

const ButtonContainer = styled.div`
  margin-top: 15px;
`

const Button = styled.button``

const SpecialMenu = () => (
  <Container className='flex__center section__padding' id='menu'> {/* app__specialMenu */}
    <MenuTitle> {/* app__specialMenu-title */}
      <SubHeading title='Menu that fits your palette' />
    </MenuTitle>
    <MenuHeader className='headtext__cormorant'>Today's Special</MenuHeader> {/* app__specialMenu-h1 */}

    <Menu> {/* app__specialMenu-menu */}
      <Left className='flex__center'>
        <LeftText> {/* app__specialMenu-heading */}
          Wine and Beer
        </LeftText>
        <LeftMenuItems> {/* app__specialMenu-items */}
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </LeftMenuItems>
      </Left>

      <Middle> {/* app__specialMenu-img */}
        <MiddleImg src={images.menu} />
      </Middle>

      <Right>
        <RightText> {/* app__specialMenu-heading */}
          Cocktails
        </RightText>
        <RightMenuItems> {/* app__specialMenu-items */}
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </RightMenuItems>
      </Right>
    </Menu>

    <ButtonContainer>
      <Button className='custom__button'>View More</Button>
    </ButtonContainer>
  </Container>
);

export default SpecialMenu;
