import PropTypes from 'prop-types'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useCart } from '../../hooks/CartContext'
import { Button } from '../Button'
import { Container, Image, ProductName, ProductPrice } from './styles'
export function ProductCard({ product }) {
  const { putProductInCart } = useCart()
  const navigate = useNavigate()

  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button
          onClick={() => {
            navigate('/carrinho')
            putProductInCart(product)
          }}
        >
          Adicionar
        </Button>
      </div>
    </Container>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object
}
