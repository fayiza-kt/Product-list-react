import React from 'react'

function ProductCards(props) {

    var prod=props.product;
  return (

    <div>
      <div className="card" style={{width:"18rem"}}>
        <img className="card-img-top" src={prod.image} alt="product-image" style={{ height: '200px', objectFit: 'contain' }}/>
        <div className="card-body " >
            <h5 className="card-title">{prod.title}</h5>
            {/* <p className="card-text text-center">{prod.description}</p> */}
            <p className="card-text large">{prod.category}</p>
            <div className="text-warning mb-1">
              {'★'.repeat(Math.round(prod.rating.rate))} <span className="text-muted">({prod.rating.count})</span>
            </div>
            {/* <p className="card-text text-warning">{prod.rating.rate}/{prod.rating.count}</p> */}
            <p className="card-text medium" style={{color:'red'}}>Save {(100 - (prod.price * 50 / (prod.price * 100) * 100)).toFixed(0)}%</p>
            <p className="card-text " style={{fontSize:"1.5rem"}}>₹{(prod.price * 50).toFixed(0)} <strike className="text-muted small">M.R.P. ₹{(prod.price * 100).toFixed(0)}</strike></p>
            {/* <p className="card-text " style={{fontSize:"1.5rem"}}>${prod.price}</p> */}
            <a href="#" className="btn btn-primary">Add to Cart </a>
            <p className="card-text "> FREE Delivery for Prime Members </p>
        </div>
     </div>
    </div>
  )
}

export default ProductCards
