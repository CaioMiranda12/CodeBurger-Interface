import React from 'react'

import HomeLogo from '../../assets/HomeImg.svg'
import { CategoryCarousel, OfferCarousel } from '../../components'
import { Container, HomeImg } from './syles'

export function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="logo da home" />
      <CategoryCarousel />
      <OfferCarousel />
    </Container>
  )
}
