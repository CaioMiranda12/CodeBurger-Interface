import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import Cart from '../../assets/Cart.svg'
import Person from '../../assets/Person.svg'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerRight,
  PageLink,
  ContainerLeft,
  ContainerText,
  PageLinkExit,
  Line
} from './syles'

export function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { logout, userData } = useUser()

  const logoutUser = () => {
    logout()
    navigate('/login')
  }

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => navigate('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => navigate('/produtos')}
          isActive={pathname.includes('/produtos')}
        >
          Ver produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink onClick={() => navigate('/carrinho')}>
          <img src={Cart} alt="carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="pessoa" />
        </PageLink>
        <ContainerText>
          <p>Olá, {userData.name}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
