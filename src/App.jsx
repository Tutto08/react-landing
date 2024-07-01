import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
function App() {
  return (
    <>
      <NavBar /> 
      <ItemListContainer mostrarBanner={false} orden={'asc'} itemPorPag={12} mensajeBienvenida={'Bienvenido a'} mensajeContenido='Por el momento la página no esta disponible. Pronto estaremos funcionando.'/>
    </>
  )
}

export default App
