import React from 'react'
import { PacmanLoader } from 'react-spinners'

const LoaderComponent = () => {
  return (
    <div style={{width:'100%', height:'85vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <PacmanLoader color='burlywood' size={70} />
    </div>
  )
}

export default LoaderComponent