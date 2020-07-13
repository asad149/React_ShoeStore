import React from 'react'
import Shoes from './../shoes.json';
import {useParams} from 'react-router-dom';
 const ProductItem = () => {

    const {id}=useParams();

    const shoe=Shoes[id];

    return (
        <div>
            <div className="card m-auto" style={{maxWidth:400,maxHeight:520,margin:"0 auto",border:"3px solid black",marginTop:30,marginBottom:30,marginRight:50,marginLeft:50}}>
                <img className="card-img-top img-responsive" src={shoe.img} alt={shoe.name}/>
                <div className="card-body">
                  <h5 className="card-text" >
                      <b>{shoe.name}</b>
                  </h5>
                </div>
              </div>
        </div>
    )
}
export default ProductItem;