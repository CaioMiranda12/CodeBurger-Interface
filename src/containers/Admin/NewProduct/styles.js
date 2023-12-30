import styled from 'styled-components'

import { Button } from '../../../components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    border-radius: 10px;
    background: #565656;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`

export const Label = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #ffffff;
  margin-bottom: 3px;
`

export const Input = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.1);
  border: none;
  padding-left: 5px;
  min-width: 200px;
`

export const ButtonStyles = styled(Button)`
  width: 100%;
  margin-top: 25px;
`

export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed #fff;
  border-radius: 5px;
  padding: 10px;

  gap: 10px;

  input {
    opacity: 0;
    width: 1px;
  }
`
