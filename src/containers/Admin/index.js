import React from 'react'
import { useLocation, useMatch } from 'react-router-dom'

import { MenuSideAdmin } from '../../components'
import paths from '../../constants/paths'
import ListProducts from './ListProducts'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'

export function Admin() {
  const location = useLocation()

  return (
    <Container>
      <MenuSideAdmin path={location.pathname} />
      <ContainerItems>
        {location.pathname === paths.Order && <Orders />}
        {location.pathname === paths.ListProducts && <ListProducts />}
      </ContainerItems>
    </Container>
  )
}
