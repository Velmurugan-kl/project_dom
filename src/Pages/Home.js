import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = (props) => {
    const a=useLocation();
    const dat1=a.state;
  return (
    <div>Home {dat1.props}</div>
  )
}

export default Home