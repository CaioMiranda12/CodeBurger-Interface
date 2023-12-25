import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 15px;
  gap: 12px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 30px 60px 0px rgba(57, 57, 57, 0.1);
  width: max-content;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Image = styled.img`
  width: 150px;
  border-radius: 10px;
`

export const ProductName = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const ProductPrice = styled.p`
  margin-top: 30px;
  color: #000;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
