import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';

const Userdelete =  () => {
    const [uid,setUid]=useState(0)
    const handle = async () => {
        await axios.delete(`https://retoolapi.dev/5M2qFh/data/${uid}`)
    };
    const handleChange = (e) => {
        setUid(e.target.value)
    }
  return (
    <div>
        <input type='number' value={uid} onChange={handleChange} min={0}/>
        <button onClick={handle}>Delete</button>
    </div>
  )
}

export default Userdelete