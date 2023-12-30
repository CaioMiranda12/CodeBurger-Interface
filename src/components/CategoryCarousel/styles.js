import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0%;
  width: 100vw;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`

export const CategoryImg = styled.img``

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`

export const Button = styled(Link)`
  border-radius: 8px;
  background: #9758a6;
  box-shadow:
    0px 20px 40px 0px rgba(151, 88, 166, 0.24),
    0px 5px 10px 0px rgba(151, 88, 166, 0.22);
  border: none;
  height: 40px;

  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`
