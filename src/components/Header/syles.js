import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.15);
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0px 70px;
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`

export const PageLink = styled.a`
  cursor: pointer;

  color: ${props => (props.isActive ? '#9758A6' : '#555')};
  font-size: 16px;
  font-style: normal;
  font-weight: ${props => (props.isActive ? 'bold' : '400')};
  line-height: normal;
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const ContainerText = styled.div`
  p {
    color: #555;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`

export const PageLinkExit = styled.a`
  color: #9758a6;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`

export const Line = styled.div`
  height: 40px;
  border: 0.5px solid #bababa;
`
