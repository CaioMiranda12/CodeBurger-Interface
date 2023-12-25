import React from 'react'

import trashIcon from '../../assets/trashIcon.png'
import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Container, Header, Body, EmptyCard } from './syles'

export function CartItems() {
  const { cartProducts, increaseQuantity, decreaseQuantity, deleteProduct } =
    useCart()

  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p style={{ paddingRight: 30 }}>Quantidade</p>
        <p>Total</p>
      </Header>
      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p style={{ fontWeight: 500 }}>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <div>
                <button onClick={() => decreaseQuantity(product.id)}>-</button>
                <p>{product.quantity}</p>
                <button onClick={() => increaseQuantity(product.id)}>+</button>
              </div>
              <button onClick={() => deleteProduct(product.id)}>
                <img src={trashIcon} />
              </button>
            </div>
            <p style={{ fontWeight: 500 }}>
              {formatCurrency(product.price * product.quantity)}
            </p>
          </Body>
        ))
      ) : (
        <EmptyCard>
          <p>Carrinho vazio</p>
        </EmptyCard>
      )}
    </Container>
  )
}
