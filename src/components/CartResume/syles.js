import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03);
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top {
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas:
      'title title'
      'items items-price'
      'tax price-tax';

    .title {
      grid-area: title;
      margin-bottom: 20px;
    }

    .items {
      grid-area: items;
    }

    .items-price {
      grid-area: items-price;
    }

    .tax {
      grid-area: tax;
    }

    .price-tax {
      grid-area: price-tax;
    }
  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    margin-top: 50px;
  }
`
