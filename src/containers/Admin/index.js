import PropTypes from 'prop-types'
import React from 'react'

import { MenuSideAdmin } from '../../components'
import ListProducts from './ListProducts'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'

export function Admin(props) {
  console.log(props)

  return (
    <Container>
      <MenuSideAdmin />
      <ContainerItems>
        {/* <Orders /> */}
        <ListProducts />
      </ContainerItems>
    </Container>
  )
}
