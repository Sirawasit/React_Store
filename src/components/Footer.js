import React from "react";
const Footer =(props) =>{
    const {company,email} = props;

    return (
       <div className="container-fluid bg-success">
          <hr/>
          <div className="text-center title text-uppercass">
            <small>
             <span className= "text-light">Power By {props.company}</span>|<span className ="text-light"> contact By Email : {props.email} </span>
            </small>
          </div>
        </div>
        )
}

export default Footer;