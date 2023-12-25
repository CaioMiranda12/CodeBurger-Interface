import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  background-image: url('${Background}');
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImg = styled.img`
  height: 90%;
`

export const ContainerItens = styled.div`
  background: #373737;
  box-shadow: 0px 4px 15px 0px rgba(74, 144, 226, 0.24);
  border-radius: 0 10px 10px 0;
  height: 90%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 100px;
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
  }
`

export const Label = styled.p`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 20px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 351.416px;
  height: 38.319px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  padding-left: 10px;
`

export const ErrorMessage = styled.p`
  color: #cc1717;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const SingUpLink = styled.p`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  a {
    text-decoration: underline;
    cursor: pointer;
  }
`
