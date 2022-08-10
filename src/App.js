import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect,useState,createContext} from "react"
import Layout from './components/Layout'
import Home from './pages/home'
import About from './pages/about'
import axios from 'axios';

 export const ProductContext = createContext();
 

function App() {
  const[data, setData]=useState([])
  const url = 'https://fakestoreapi.com/products'

  useEffect(()=>{
    axios.get(url).then((response)=>{
      setData(response.data)
      // console.log(response.data)
    },[data])
      
    
    
  })

  return (


    <div className="App">
      <ProductContext.Provider value={data}>
      <Layout />
      </ProductContext.Provider>


    </div>
  );
}

export default App;
