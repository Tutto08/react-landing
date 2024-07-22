import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import fetchData from './fetchData.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound.jsx'
import ItemDetail from './components/ItemDetail.jsx'

function App() {
  
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetchData().then( response => {console.log(response); setProductos(response)});

    /*fetch('https://restcountries.com/v3.1/name/Argentina') // Para GET ponemos FETCH y url
    .then(response => response.json()) //fetch es asincrono asi que devuelve una promesa, por eso usamos fetch
    .then(data => {
        let newObj = {
          name: data[0].name.common,
          flag: data[0].flags.png
        };
        console.log(newObj);
      }
    ) */
      // .json le da formato pero devuelve otra promesa, pones "data" o lo que quieras y lo traes
  })


  return (
    <>
      <BrowserRouter basename='/react-landing'>      
        <NavBar />   
        <Routes>
        <Route path="/" element={<ItemListContainer  productos = {productos} mensajeBienvenida={'Bienvenido a'} mensajeContenido='Cargando ...'/>} />
          <Route path="/:filtro" element={<ItemListContainer  productos = {productos} mensajeBienvenida={'Bienvenido a'} mensajeContenido='Cargando ...'/>} />
          <Route path="/detalle/:id" element={<ItemDetail productos = {productos}/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>        
      </BrowserRouter>      
      
    </>
  )
}

export default App
