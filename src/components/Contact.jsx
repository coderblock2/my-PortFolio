import React, { useState } from "react";
import Hireme from './hireme'
import "./CSS/contact.css";

const Contact = () => {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

   const handleSubmit = (e) =>{
    e.preventDefault();
      const formdata = {
        name,
        email,
        message
      }

      alert("Form Submitted Successfully");
   }

  return (
    <section id="sections">
      <div className="contactcontainer">
        <div className="google">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>

        <div className="form">
        <div className="mainarea">
        <h2>Hire Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque, provident repellat quae voluptates saepe cum est ipsam eveniet corrupti veritatis tenetur earum sint vero exercitationem sequi facere iusto! Magni officiis fugit rem sunt repudiandae!</p>
         <div className="appliedform">
         <form action="" onSubmit={handleSubmit}>
          <div className="name">
            <label htmlFor="email">Name</label>
            <input type="text" onChange={(e)=>setname(e.target.value)}/>
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="text" onChange={(e)=>setemail(e.target.value)} />
          </div>
          <div className="message">
            <label htmlFor="label">Message</label>
            <textarea name="message" id="message" cols="67" rows="10"  onChange={(e)=>setmessage(e.target.value)}></textarea>
          </div>

          <div className="submit">
            <input type="submit" value="Submit" />
          </div>
         </form>
         </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
