import React, { Component } from 'react';

const NavBar = ({totalCounters}) => {
  
        return (
            
            <nav className="navbar navbar-light bg-light ml-2 d-flex  justify-content-start">
 
    <a className="navbar-brand" href="#">Navbar</a>
    <div> <div className="badge badge-danger badge-pill p-2"> {totalCounters} </div> </div>
  
</nav> );
};



 
export default NavBar ;