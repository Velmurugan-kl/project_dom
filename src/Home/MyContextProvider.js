import React,{useState} from 'react'
import Context from './Context'
const MyContextProvider = ({children}) => {
    const [myValue,setMyValue] = useState('');
  return (
    <Context.Provider value={{ myValue,setMyValue}}>
        {children}
        
    </Context.Provider>
  )
}

export default MyContextProvider