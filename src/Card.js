import React from 'react'

function Card(props){
    return (
        <div className="col-lg-4 mt-3">
            <div className="Card">
                <img src={props.productData.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.productData.title}</h5>
                    <p className="card-title">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button disabled={props.cartItems.find(obj => obj.id == props.productData.id) ? true: false} onClick={()=>{props.handleAddToCart(props.productData)}} className="btn btn-primary">Rs.{props.productData.price}Add to cart</button>
                </div>
            </div>
        </div>
    )
}
export default Card