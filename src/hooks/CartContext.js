import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext({})

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([])

  let newCartProducts = []

  const updateLocalStorage = async products => {
    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(products))
  }

  const putProductInCart = async product => {
    newCartProducts = cartProducts
    const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

    if (cartIndex >= 0) {
      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1
      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProducts(newCartProducts)
    }

    updateLocalStorage(newCartProducts)
  }

  const deleteProduct = async productId => {
    const newCart = cartProducts.filter(prd => prd.id !== productId)

    setCartProducts(newCart)

    updateLocalStorage(newCart)
  }

  const increaseQuantity = async productId => {
    const newCart = cartProducts.map(prd =>
      prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd
    )

    setCartProducts(newCart)

    updateLocalStorage(newCart)
  }

  const decreaseQuantity = async productId => {
    const cartIndex = cartProducts.findIndex(prd => prd.id === productId)

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map(prd =>
        prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd
      )

      setCartProducts(newCart)

      updateLocalStorage(newCart)
    } else {
      deleteProduct(productId)
    }
  }

  useEffect(() => {
    const loadCartProducts = async () => {
      const clientCartData = await localStorage.getItem('codeburger:cartInfo')

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }

    loadCartProducts()
  }, [])

  return (
    <CartContext.Provider
      value={{
        putProductInCart,
        cartProducts,
        increaseQuantity,
        decreaseQuantity,
        deleteProduct
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used with CartContext')
  }
  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
