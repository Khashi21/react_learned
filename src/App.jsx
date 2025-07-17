import axios from 'axios'
import React,{useEffect ,useState}  from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Product from './pages/product';
import Contact from './pages/contact';
import Header from './components/header';



const App=()=>{
  return (
    <div className='mt-10 p-10 flex items-center justify-evenly font-semibold text-2xl text-white bg-black'>
      <h1>heyy buddy how you doing</h1>
    </div>


    // <div>
    //   <Header />
    //   <Routes>
    //     <Route path='/' element={<Home/>} />
    //     <Route path='/about' element={<About/>} />
    //     <Route path='/home' element={<Home/>} />
    //     <Route path='/contact' element={<Contact/>} />
    //     <Route path='/product' element={<Product/>} />
    //   </Routes>
    // </div>


    // const [data,setData]=useState([]);
    // const getData=async()=>{
    //   const response=await axios.get('https://picsum.photos/v2/list?page=2&limit=10')
    //   setData(response.data);
    //   console.log(data);    
      
    // }
    // useEffect(() => {
    //   getData();
    // }, []);

    // <>
    //   <div className='p-10'>
    //     <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90'>Get Data</button>
    //     <div className='p-5 mt-5 bg-gray-950 rounded flex-items-center justify-between'>
    //       {
    //         data.map(function(elem,idx){
    //           return(
    //             <div key={idx} className='mt-5 bg-white text-black flex items-center justify-between w-full px-6 py-7 rounded '>
    //               <img className='h-40 ' src={elem.download_url} alt="" />  
    //               <h2 className='text-2xl'>thapa.div</h2>
    //             </div>
    //           )
    //         })
    //       }
    //     </div>
    //   </div>
    // </> 
  )
}

export default App