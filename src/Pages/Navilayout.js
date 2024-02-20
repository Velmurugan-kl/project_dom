import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import './Navilayout.css'
const Navilayout = () => {
  return (
    <div>
        <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li className='log'><a class="active" href="/signup">Signup</a></li>
</ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Navilayout