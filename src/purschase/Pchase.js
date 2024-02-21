
import "./Pchase.css"
import img3 from "../purschase/book.jpg"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import React, { Component } from 'react'

export class Pchase extends Component {
  constructor(){
    super();
    this.state={
        count:0
    }
   } 

   //function to increment the counter
   incrementCounter=()=>{
    this.setState({count:this.state.count+499})
   };
   //dcrement
   decrementCounter=()=>{
    this.setState({count:this.state.count-499})
   };
  render() {
    return (
      <div>
        <fieldset class='s'>
    <p class='d'>
      
    <a href="https://www.skct.edu.in/#/"target='_blank'>☰ Home</a><br></br>
     
    <input class='c'placeholder='⌕ SEARCH'></input></p><br></br>
    </fieldset>
 <center><h2>Popz Tune</h2></center>
    <div>
      
 <h1>Music for</h1>
 <h3>+ Member</h3>
 <header>
  <h5>Shopping cart</h5>
 </header>
 
 <img src={img3}width={100}height={100}></img>
 <p class='bio'><h6><font color="white">Music Theory for Guitarists, the Complete Method Book<br></br>
 (Single Editon)</font></h6>
     <h6>₹̶9̶9̶9̶.̶0̶0̶/̶</h6><font color="orange"><h6>4.8★★★★★</h6></font>
          <font color="green"><h6> ₹499.00/</h6></font>
          </p></div>
  
    <button class='add'onClick={this.incrementCounter}>Add</button>
    <button class='dec'onClick={this.decrementCounter}>less</button>
  <h4>Total Price: ₹ {this.state.count}.00/</h4>
  <Button 
                fullWidth
                variant="contained" color="warning"
               
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
      </div>
    )
  }
}

export default Pchase