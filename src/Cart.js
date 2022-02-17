import React from 'react'

function Cart(props){
    return (
        props.cartItems.length> 0 ?<ol className="list-group list-group-numbered">
            {
                props.cartItems.map((item)=>{
                    return <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{item.title}</div>
                        Rs.{item.price}
                    </div>
                    <button onClick={()=>(props.handleRemoveCart(item))} className="badge bg-danger rounded-pill">X</button>
                    </li>
                })
            }
        </ol> : <span>No items</span>
    )
}
export default Cart