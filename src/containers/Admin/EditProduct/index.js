import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import Switch from '@mui/material/Switch'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate, useLocation } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import paths from '../../../constants/paths'
import api from '../../../services/api'
import {
  Container,
  Label,
  Input,
  ButtonStyles,
  LabelUpload,
  ContainerInput
} from './styles'

function EditProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()
  const {
    state: { product }
  } = useLocation()
  console.log(product)
  const label = { inputProps: { 'aria-label': 'Switch demo' } }

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    price: Yup.string().required('O preço é obrigatório'),
    category: Yup.object().required('A categoria é obrigatória'),
    offer: Yup.bool()
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async data => {
    const productDataFormData = new FormData()
    console.log(data)

    productDataFormData.append('name', data.name)
    productDataFormData.append('price', data.price)
    productDataFormData.append('category_id', data.category.id)
    productDataFormData.append('file', data.file[0])
    productDataFormData.append('offer', data.offer)

    await toast.promise(
      api.put(`products/${product.id}`, productDataFormData),
      {
        pending: 'Editando novo produto...',
        success: 'Produto editado com sucesso',
        error: 'Falha ao editar o produto'
      }
    )

    setTimeout(() => {
      navigate(paths.ListProducts)
    }, 2000)
  }

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            defaultValue={product.name}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Preço</Label>
          <Input
            type="number"
            {...register('price')}
            defaultValue={product.price}
          />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>

        <div>
          <LabelUpload>
            {fileName || (
              <>
                <CloudUploadIcon />
                Carregue a imagem do produto
              </>
            )}
            <Input
              type="file"
              accept="image/png, image/jpeg"
              {...register('file')}
              onChange={value => {
                setFileName(value.target.files[0]?.name)
              }}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>

        <Controller
          control={control}
          name="category"
          defaultValue={product.category}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={category => category.name}
                getOptionValue={category => category.id}
                placeholder="Categorias"
                defaultValue={product.category}
              />
            )
          }}
        ></Controller>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>

        <ContainerInput>
          <div>
            <Switch
              {...label}
              {...register('offer')}
              defaultChecked={product.offer}
            />
          </div>

          <Label>Produto em oferta?</Label>
        </ContainerInput>

        <ButtonStyles>Editar produto</ButtonStyles>
      </form>
    </Container>
  )
}

export default EditProduct
