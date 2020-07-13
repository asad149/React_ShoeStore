import React from 'react'
import Shoes from './../shoes.json';
import {Link} from 'react-router-dom';

 const Product = () => {

    return (
        <div className="container">
           
     
           {Object.keys(Shoes).map(KeyName=>{
               const shoes=Shoes[KeyName];
               return(
                <div className="row">
                <div className="col-md-12">
                   <Link to={`/product/${KeyName}`} style={{textDecoration:"none",color:"black"}}>
                      
                <div className="card" style={{maxWidth:300,maxHeight:420,margin:"0 auto",border:"3px solid black",marginTop:30}}>
                <img className="card-img-top img-responsive" alt={shoes.name} src={shoes.img} />
                <div className="card-body">
                  <h5 className="card-text" >
                      <b>{shoes.name}</b>
                  </h5>
                </div>
              </div>
              
              </Link>
              </div>
              </div>              
               )
           })}

        </div>
    )
}
export default Product;