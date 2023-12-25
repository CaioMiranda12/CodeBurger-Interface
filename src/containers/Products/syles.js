import styled from 'styled-components'

export const Container = styled.div`
  background: #efefef;
  width: 100vw;
  min-height: (100vh - 70px);
`

export const ProductImg = styled.img`
  width: 100vw;
`

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
`

export const ContainerButton = styled.button`
  color: ${props => (props.isActived ? '#9758A6' : '#9a9a9d')};
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  border-bottom: ${props => (props.isActived ? '2px solid #9758A6' : 'none')};
  background: none;
  cursor: pointer;
  padding-bottom: 5px;
`

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 40px;
  justify-items: center;
`
