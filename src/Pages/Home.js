import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = (props) => {
    const a=useLocation();
    const dat1=a.state;
  return (
    <div>Home {dat1.props}
    <h1>udghfwerjk</h1></div>
  )
}

export default Home
