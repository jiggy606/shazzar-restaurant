import React from 'react';

import { images, data } from '../../constants';

import styled from 'styled-components';

import { SubHeading, MenuItem } from '../../components';

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
`

const Left = styled.div``

const LeftText = styled.p``

const LeftMenuItems = styled.div``

const Middle = styled.div``

const MiddleImg = styled.img``

const Right = styled.div``

const RightText = styled.p``

const RightMenuItems = styled.div``

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
          Wine and Beer
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
