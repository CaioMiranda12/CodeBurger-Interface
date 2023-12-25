import PropTypes from 'prop-types'
import React from 'react'

import { ContainterButton } from './syles'

export function Button({ children, ...rest }) {
  return <ContainterButton {...rest}>{children}</ContainterButton>
}

Button.propTypes = {
  children: PropTypes.string
}
