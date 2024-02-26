import React, { Component } from 'react';
import "./Pchase.css";
import img30 from "../purschase/piabook.png";
import img31 from "../purschase/drumbook.png";
import ava from "../purschase/pro.png";
import ava1 from "../purschase/close.png";
import gs from "../purschase/boi.jpg";
import soc from "../purschase/social.png";


class Pchase extends Component {
  constructor() {
    super();
    this.state = {
      count1: 0,
      count2: 0,
      showProfile: false // Define showProfile state variable
    };
  }
  

  incrementCounter1 = () => {
    this.setState({ count1: this.state.count1 + 499 });
  };

  decrementCounter1 = () => {
    this.setState({ count1: this.state.count1 - 499 });
  };

  incrementCounter2 = () => {
    this.setState({ count2: this.state.count2 + 34999 });
  };

  decrementCounter2 = () => {
    this.setState({ count2: this.state.count2 - 34999 });
  };

  handleOpen = () => {
    this.setState({ showProfile: true });
  };
  handleclose = () => {
    this.setState({ showProfile: false });
  };

  render() {
    return (
      <div className='pas'>

        <center><h2 className="pt">Popz Tune</h2></center>
        <div>
          <div className="for">
            
            <img 
              src={ava} 
              width={90} 
              height={90}
              alt="Avatar" 
              className="avatar"
              onClick={this.handleOpen}
            />
           
            <header>
              {this.state.count1 + this.state.count2 < 35000 ?
                <h3 className='mm'>Free Membership</h3> :
                <h3 className='mp'>+ Membership Activated</h3>
              }
              <h5 className='sc'>Shopping Cart</h5>
            </header>
            {this.state.showProfile &&
              <div className="profile-card">
                <div className="avatar1">
                   <img src={ava1}width={20} height={20}
              alt="Avatar" onClick={this.handleclose}/></div>
              <div className='pip'><br></br>
               <img src={gs} width={100} height={100}
                alt="Profile"className="profile-image"/>
                <div className='pn'>
                <p className="profile-name">Surya</p>
                </div>
                <br></br></div>
              <div className="profile-details">
                <p className="profile-instrument">Instrument: Piano</p>
                <p className="profile-genre">Genre: Drums,Piano</p>
                <p className="profile-location">Location: India</p>
                <button className='feedb1'>
            <a href="mailto:gsuryaprakash465@gmail.com">Send email</a>
            </button>
            <center><img src={soc} width={90} height={40}
                alt="Profile"className="socc"/></center>
              </div>
            </div>
            }
            <img src={img30} width={100} height={100} alt="book" />
            <p className='bio'>
              <span style={{ color: "black" }}>Trinity College London Piano Exam Pieces Plus Exercises <br />
              from 2023: Grade 5(Single Edition)</span></p>
               
              <h6 className='bb'  style={{ color: "#888" }}>₹̶9̶9̶9̶.̶0̶0̶/̶</h6>
              <h6 className='bb1' style={{ color: "#ffc107" }}>4.8★★★★★</h6>
              <h6 className='bb2' style={{ color: " #28a745" }}> ₹499.00/</h6>
              <button className='add' onClick={this.incrementCounter1}>Add</button>
              <button className='dec' onClick={this.decrementCounter1}>Less</button>
            
            <div className='ig'></div>
            <img src={img31} width={100} height={100} alt="book" />
            <p className='bio1'>
              <span style={{ color: "black" }}>Kadence Acoustic Beginners Drum Kit (5 Piece Complete) <br/>
              Full -Size Drumset with Cymbals (Wine Red)
                (Single Edition)</span></p>
              <h6 className='bb' style={{ color: "#888" }}>₹̶3̶9̶,0̶0̶0̶.0̶0̶/</h6>
              <h6 className='bb1' style={{ color: "#ffc107" }}>4.9★★★★★</h6>
              <h6 className='bb2' style={{ color: " #28a745" }}> ₹34999.00/</h6>
              <button className='add1' onClick={this.incrementCounter2}>Add</button>
              <button className='dec1' onClick={this.decrementCounter2}>Less</button>
         
            <h4 className="tp">Total Price: ₹{this.state.count1 + this.state.count2}.00/</h4>
           
          </div>
        </div>
      </div>
    );
  }
}

export default Pchase;
