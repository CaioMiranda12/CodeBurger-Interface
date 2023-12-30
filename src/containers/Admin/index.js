import React from 'react'
import { useLocation } from 'react-router-dom'

import { MenuSideAdmin } from '../../components'
import paths from '../../constants/paths'
import EditProduct from './EditProduct'
import ListProducts from './ListProducts'
import NewProduct from './NewProduct'
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
        {location.pathname === paths.NewProduct && <NewProduct />}
        {location.pathname === paths.EditProduct && <EditProduct />}
      </ContainerItems>
    </Container>
  )
}
