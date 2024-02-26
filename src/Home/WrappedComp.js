import React from 'react'
import MyContextProvider from './MyContextProvider'
import CompA from './CompA'

const WrappedComp = () => {
  return (
    <MyContextProvider>
        <CompA></CompA>
    </MyContextProvider>
  )
}

export default WrappedComp