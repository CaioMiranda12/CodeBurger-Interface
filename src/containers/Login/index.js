import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import CodeLogo from '../../assets/codeburger-logo.svg'
import LoginImage from '../../assets/login-img.svg'
import { Button } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  LoginImg,
  ContainerItens,
  Label,
  Input,
  SingUpLink,
  ErrorMessage
} from './styles'

export function Login() {
  const navigate = useNavigate()
  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verfificando seus dados',
        success: 'Seja bem vindo(a)',
        error: 'Verifique seu e-mail e senha'
      }
    )

    putUserData(data)

    if (data.admin) {
      navigate('/pedidos')
    } else {
      navigate('/')
    }
  }

  return (
    <Container>
      <LoginImg src={LoginImage} />
      <ContainerItens>
        <img src={CodeLogo} />

        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            error={errors.email?.message}
            type="email"
            {...register('email')}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            error={errors.password?.message}
            type="password"
            {...register('password')}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 15, marginBottom: 25 }}>
            Sign In
          </Button>
        </form>

        <SingUpLink>
          Não possui conta?{' '}
          <Link style={{ color: 'white' }} to="/cadastro">
            Sign up
          </Link>
        </SingUpLink>
      </ContainerItens>
    </Container>
  )
}
