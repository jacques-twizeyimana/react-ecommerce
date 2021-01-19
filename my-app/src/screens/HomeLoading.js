import React, { useState, useEffect} from 'react'
// import data from '../data';
import {Link} from 'react-router-dom'
import axios from 'axios';


function HomeLoading(props) {
  const [loadingState, updateLoadingState] = useState(true);
  const [products,setProducts] =  useState([])
  useEffect(()=>{
    const fetchData = async () =>{
       var data 
      await axios.get("/api/products")
        .then(resp => {
            data = resp.data 
            updateLoadingState(false)
        })
        .catch(err => {
            console.error(err);
        });

      setProducts(data)
    }
    fetchData()
    return()=>{
      
    };
  },[]
  )
    return <div>
        <h2 className={"loding-sm" + loadingState ? 'loading':''}>Welcome back!</h2>
        <ul className="products">
    {
      // data.products.map(product =>
      products.map(product =>
        <li key={product.id}>

        <div className={"product" + loadingState ? 'loading':''}>
            <div className={loadingState ? 'loading loading-img':''}>
                <Link to={'/product/'+ product.id}>
                <img className={"product-image"}src={product.image} alt="product" />
                </Link>
            </div>

          <div className={"product-name loading-sm" + loadingState ? 'loading':''}>
          <Link to={'/product/'+ product.id}>{product.name}</Link>
          </div>

          <div className={"product-brand loading-sm" + loadingState ? 'loading':''}>{product.brand}</div>

          <div className={"loading-sm product-price" + loadingState ? 'loading':''}>${product.price}</div>

          <div className={"product-rating loading-sm" + loadingState ? 'loading':''}>{product.rating} stars ({product.numReviews} user reviews)</div>

        </div>

      </li>
        )
    }
      
    </ul>

    </div>
}

export default HomeLoading