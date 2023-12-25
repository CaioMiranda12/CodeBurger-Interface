import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding: 10px;
  width: max-content;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: 1px solid #b5b5b5;
  padding: 5px;

  p {
    color: #9a9a9d;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  grid-gap: 10px 15px;
  width: max-content;

  p {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  img {
    width: 120px;
    border-radius: 10px;
  }

  .quantity-container {
    div {
      display: flex;
      gap: 20px;
    }

    button {
      height: 30px;
      border: none;
      background: transparent;
      cursor: pointer;
      font-size: 24px;

      img {
        width: 50px;
      }
    }

    p {
      margin-top: 5px;
    }
  }
`

export const EmptyCard = styled.div`
  text-align: center;
  font-weight: bold;
  padding: 20px;
`
