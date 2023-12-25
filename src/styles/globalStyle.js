import { createGlobalStyle } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        outline: none;
    }
`

export default GlobalStyle
