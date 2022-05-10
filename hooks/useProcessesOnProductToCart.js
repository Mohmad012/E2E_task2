import { useSelector, useDispatch } from 'react-redux'

import {
  deleteProduct,
  addProductToCart,
  ProductIncrement,
  ProductDecrement
} from '../store/logicSlice'

const useProcessesOnProductToCart = () => {

    const ProductsIsAdded = useSelector((state) => state.logic.ProductsIsAdded)
    
    const dispatch = useDispatch()
  
    const addProductToCartHandler = (value) => dispatch(addProductToCart(value))
  
    const handleDisabledBtn = (id) => ProductsIsAdded.some((item => item.id == id)) ? true : false
  
    const ProductIncrementHandler = (id) => dispatch(ProductIncrement({id}))
  
    const ProductDecrementHandler = (id) => dispatch(ProductDecrement({id}))
  
    const deleteProductHandler = (id) => dispatch(deleteProduct({id}))
  
    return{
      addProductToCartHandler,
      handleDisabledBtn,
      ProductIncrementHandler,
      ProductDecrementHandler,
      deleteProductHandler
    }
  
  };

export default useProcessesOnProductToCart