import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import ProductLogo from '../../assets/ProductImg.svg'
import { ProductCard } from '../../components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  ProductImg,
  CategoryMenu,
  ContainerButton,
  ProductContainer
} from './syles'

export function Products() {
  const { state } = useLocation()

  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredproducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data } = await api.get('products')

      const formatedCurrency = data.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(formatedCurrency)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category_id === activeCategory
      )

      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <ProductImg src={ProductLogo} alt="logo dos produtos" />
      <CategoryMenu>
        {categories &&
          categories.map(category => (
            <ContainerButton
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              isActived={activeCategory === category.id}
            >
              {category.name}
            </ContainerButton>
          ))}
      </CategoryMenu>
      <ProductContainer>
        {filteredproducts &&
          filteredproducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ProductContainer>
    </Container>
  )
}

Products.propTypes = {
  location: PropTypes.object
}
