import React from 'react'
import data from '../data';
import {Link} from 'react-router-dom'

//

function ProductScreen(props) {

    const product = data.products.find(x => x.id === parseInt(props.match.params.id))
    if(!product) return <div>
        <h1>404 <small>Page not found</small></h1>
    </div>

    return <div >
        <div className="container-fluid">
        <div className="row bg-light p-3 mb-5">
            <div className="col-sm-12 col-md-5 mb-2 text-md">
              <Link to="/" className="text-bold san-font">
              &lt; &nbsp;Back to results</Link>                
            </div>
            <div className="col-sm-12 col-md-3"></div>
            <div className="col-sm-12 col-md-4">
              <form>
                  <div className="form-row">
                    <div className="col-9">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">@</div>
                        </div>
                        <input type="text" className="form-control bebig" id="inlineFormInputGroup" placeholder="Type then return to search" />
                      </div>
                    </div>
                    <div className="col-3">
                        <input type="submit" className="form-control bebig" value="search" />
                    </div>
                  </div>
              </form>
            </div>
        </div>
      </div>
      <div className="container ">
        <div className="details row">
            <div className="col-xs-12 col-sm-10 col-md-6 col-lg-4">
              <img className="img-thumbnail img-responsive" src={product.image} alt="product" />
              <p className="text-md text-primary">{product.name}</p>
            </div>
            <div className="col-xs-12 col-sm-10 col-md-6 col-lg-4 bg-light p-3">
              <h2 >{product.name}</h2>
              <div className="mt-2 mb-5">
                <h5 className="text-bold">{product.rating} stars<br/>({product.numReviews} customer review)</h5>
              </div>
              <div className="mt-2 mb-5">
                <h5 className="text-bold ">Price <span className="text-danger">${product.price}</span> </h5>
              </div>
              <div className="mt-2 mb-5">
                <h5 className="text-bold">Description:</h5>
                <p className="san-font">{product.description}</p>
              </div>
              <h5>Manufacturer: <span className="text-info">{product.brand}</span></h5>
            </div>
            <div className="col-xs-12 col-sm-10 col-md-6 col-lg-4">
              <h1 className="mb-3">Continue to checkout</h1>
              <div className="border border-1 p-3">
                <h5 className="text-bold mb-3">Price: <span className="text-danger">${product.price}</span></h5>
                <h5 className="text-bold mb-3">Status: {product.status}</h5>
                <div className="mb-3">
                  <span className="text-bold">quantity:</span>
                  <input className="input-auto" htmltype="number" name="productsQuantity" defaultValue="1" width="15" />
                </div>
                <div>
                  <button className="btn btn-warning check">Continue to checkout</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
}
export default ProductScreen