import React from "react";
import { Link } from "react-router-dom";


 const header=()=>{
    
    return(
        <div className='py-7 px-10 bg-emerald-600 text-3xl text-white flex items-center justify-between'>
            <h2>heyy how you doin?</h2>
            <div className='flex gap-10 text-lg underline'>
                <Link to='/'>home</Link>
                <Link to='/contact'> contact</Link>
                <Link to='/product'> product</Link>
                <Link to='/about'>about</Link>
            </div>
        </div>
    )
 }
 export default header