import LogoutIcon from '@mui/icons-material/Logout'
import React from 'react'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ContainerLinks, ListLink } from './styles'

export function MenuSideAdmin() {
  const { logout } = useUser()

  return (
    <Container>
      <hr></hr>
      {listLinks.map(item => (
        <ContainerLinks key={item.id} isActive={true}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ContainerLinks>
      ))}
      <hr></hr>
      <ContainerLinks style={{ position: 'absolute', bottom: 30 }}>
        <LogoutIcon style={{ color: '#ffffff' }} />
        <ListLink to={'/login'} onClick={logout}>
          Sair
        </ListLink>
      </ContainerLinks>
    </Container>
  )
}
