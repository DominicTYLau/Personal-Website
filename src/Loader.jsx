import {Html} from '@react-three/drei'
import React from 'react'
import { RotatingSquare } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Html>

    <div>  render(<RotatingSquare
      visible={true}
      height="100"
      width="100"
      color="#a9e5ff"
      ariaLabel="rotating-square-loading"
      wrapperStyle={{}}
      wrapperClass=""
      />)</div>

    </Html>
  )
}

export default Loader;