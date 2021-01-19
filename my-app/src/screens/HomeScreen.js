import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {listProducts} from '../actions/productActions'

function HomeScreen(props) {
  
  // const [products,setProducts] =  useState([])
  const loadingItems = [1,2,1,2,12,1,2,1,1,2,3,4]

  const productList = useSelector(state => state.productList)
  const {products, loading , error} = productList
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(listProducts())
    /*
    const fetchData = async () =>{
      const {data} = await axios.get("/api/products")
      setProducts(data)
    }
    fetchData() */

    return()=>{
      
    };
  },[]
  )
    return loading? <div className="p-5 row fake-products">
     {loadingItems.map(item => (
        <div className="fake-product mb-5 col-md-2 col-lg-3">
        <div className={'loading loading-img'}></div>
        <div className={"fake-product-name loading-sm loading"}></div>
        <div className={"fake-product-brand loading-sm loading"}></div>
        <div className={"loading-sm fake-product-price loading"}></div>
        <div className={"fake-product-rating loading-sm loading"}></div>
        {console.log(item)}
      </div>

      ))}
    
      
  
    </div>:
    error? <div className="p-5 bg-danderg">
      <h1 className="text-white">Error occurred</h1>
      <p>{error.message}</p>
    </div> :
    <div>
        <h2>Welcome back!</h2>
        <ul className="products">
    {
      // data.products.map(product =>
      products.map(product =>
        <li key={product.id}>

        <div className="product">
        <Link to={'/product/'+ product.id}>
          <img className="product-image" src={product.image} alt="product" />
          </Link>

          <div className="product-name">
          <Link to={'/product/'+ product.id}>{product.name}</Link>
          </div>

          <div className="product-brand">{product.brand}</div>

          <div className="product-price">${product.price}</div>

          <div className="product-rating">{product.rating} stars ({product.numReviews} user reviews)</div>

        </div>

      </li>
        )
    }
      
    </ul>

    </div>
}

export default HomeScreen