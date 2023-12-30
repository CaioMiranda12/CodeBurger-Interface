import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import paths from '../constants/paths'
import { Home, Login, Products, Register, Cart, Admin } from '../containers'
import PrivateRoute from './private-route'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path={paths.Login} element={<Login />} />
        <Route path={paths.Register} element={<Register />} />
        <Route
          path={paths.Home}
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.Products}
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.Cart}
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.Order}
          element={
            <PrivateRoute isAdmin>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.ListProducts}
          element={
            <PrivateRoute isAdmin>
              <Admin />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.NewProduct}
          element={
            <PrivateRoute isAdmin>
              <Admin />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.EditProduct}
          element={
            <PrivateRoute isAdmin>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default MyRoutes
