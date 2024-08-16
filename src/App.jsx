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
import { ContextProvider } from './components/Context.jsx'

function App() {
  
  
  useEffect(() => {
    

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
    
      <ContextProvider> 
        <BrowserRouter basename='/react-landing'>   
            <NavBar />   
            <Routes>
            <Route path="/" element={<ItemListContainer/>} />
              <Route path="/:filtro" element={<ItemListContainer/>} />
              <Route path="/detalle/:id" element={<ItemDetail/>} />
              <Route path="*" element={<NotFound/>} />
            </Routes>        
        </BrowserRouter>      
      </ContextProvider>     
      
    </>
  )
}

export default App
