import React from "react";

const contact = () => {
    return <main id="mainContent">
      <div className="container">
      <div className="address">our Address:<br/>
      10-50,Durga nagar<br/>
      Naiduthota<br/>
      Visakhapatnam
      </div>
      <div className="row justify-content-center mt-5 p-0">

          <p className="services">Contact Us </p>
                             
       
      <div className="form">
        
        <form >
          
        <label >Name:</label>
        <input type="text" placeholder="name"></input><br/>
        <label >mail:</label>
        <input type="email" placeholder="mail id"></input><br/>
        <label >phone:</label>
        <input type="phone" placeholder="contact"></input><br/>
        <label >message:</label>
        <textarea   placeholder="message"></textarea><br/>
        <input type="submit"></input>

        
        
       

        </form>
        </div>
        

        </div>
      </div>
    </main>
  }
  export default contact;