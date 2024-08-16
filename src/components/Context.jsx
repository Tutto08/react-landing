import { createContext, useContext, useState } from "react";
import fetchData from "../fetchData";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDufWD01kcTz08MvtopLNUKT_EvZt4QowQ",
    authDomain: "react-flex-roman.firebaseapp.com",
    projectId: "react-flex-roman",
    storageBucket: "react-flex-roman.appspot.com",
    messagingSenderId: "807330899331",
    appId: "1:807330899331:web:627515f8370b40171102b6"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productsCollection = collection(db, "productos");
const ordersCollection = collection(db, "ordenes");

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {

    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);

    function cargarData(){

        getDocs(productsCollection).then(snapshot => {
            let arrayDeProductos = snapshot.docs.map(el => el.data());
            console.log(arrayDeProductos);
            setProductos(arrayDeProductos);
        }).catch(err => {
            alert("Error productos");
        });

    }
    
    function agregarAlCarrito(id){
        const carritoAuxiliar = [...carrito];
        const productoAAgregar = productos.find(el => el.id === id)
        carritoAuxiliar.push(productoAAgregar);
        setCarrito(carritoAuxiliar);
        console.log(carritoAuxiliar);
    }

    function crearOrden({ nombre, telefono, email }) {
        if (carrito.length > 0) {
            const nuevaOrden = {
                nombre,
                telefono,
                email,
                productos: carrito,
            };
    
            addDoc(ordersCollection, nuevaOrden)
                .then((response) => {
                    console.log("Orden creada con el id " + response.id);
                    setCarrito([]);
                })
                .catch((err) => {
                    alert("Error al crear la orden");
                });
        } else {
            console.log("Carrito está vacío");
        }
    }

    return(
        <AppContext.Provider value={{productos, carrito, setCarrito, cargarData, agregarAlCarrito, crearOrden}}>
            {props.children}
        </AppContext.Provider>
    );
}
/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDufWD01kcTz08MvtopLNUKT_EvZt4QowQ",
  authDomain: "react-flex-roman.firebaseapp.com",
  projectId: "react-flex-roman",
  storageBucket: "react-flex-roman.appspot.com",
  messagingSenderId: "807330899331",
  appId: "1:807330899331:web:627515f8370b40171102b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);*/