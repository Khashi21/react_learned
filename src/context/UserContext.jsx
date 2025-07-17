import React from "react";


 const UserContext=({children})=>{

    const userName="thapa.div";


    return(
        <h1>{children}</h1>
        // <h1 className="mt-10 p-10 flex items-center justify-evenly font-semibold text-2xl text-white bg-black">this is fokin comedy</h1>
    )
 }
 export default UserContext