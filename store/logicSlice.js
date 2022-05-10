import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalAllPricesOfProducts:0,
  cartCount:0,
  counts: [],
  Products:[],
  ProductsIsAdded:[],
}

export const logicSlice = createSlice({
  name: 'logic',
  initialState,
  reducers: {
    addProductToCart: (state , action) => {
      if(state.Products.some(Product => Product.id === action.payload.id)){
        let ProductsFiltered = state.Products.filter(item => item.id === action.payload.id)
        ProductsFiltered[0].count = ProductsFiltered.length
        let ProductsNotFiltered = state.Products.filter(item => item.id !== action.payload.id)
        state.Products = [...ProductsNotFiltered , ProductsFiltered[0]]
        state.ProductsIsAdded = [...ProductsNotFiltered , ProductsFiltered[0]]
      }else{
        state.Products.push(action.payload)
        state.ProductsIsAdded.push(action.payload)
        state.counts.push({count:action.payload.count , id:action.payload.id})
      }
      state.totalAllPricesOfProducts = state.Products.reduce((current , item) => current + +item.total , 0)
      state.cartCount = state.Products.length
    },
    ProductIncrement: (state , action) => {

      state.Products.map(Product => {
          if(Product.id === action.payload.id){
            Product.count++
            let Total = Product.price * Product.count
            Product.total = Total.toFixed(2)
          }
      })
      state.totalAllPricesOfProducts = state.Products.reduce((current , item) => current + +item.total , 0)
      state.cartCount = state.Products.length
    },
    ProductDecrement: (state , action) => {
      state.Products.map(Product => {
          if(Product.id === action.payload.id && Product.count !== 1){
            Product.count--
            let Total = Product.price * Product.count
            Product.total = Total.toFixed(2)
          }
      })
      state.totalAllPricesOfProducts = state.Products.reduce((current , item) => current + +item.total , 0)
      state.cartCount = state.Products.length
    },
    deleteProduct: (state, action) => {
      state.Products = state.Products.filter(item => item.id !== action.payload.id)
      state.ProductsIsAdded = state.ProductsIsAdded.filter(item => item.id !== action.payload.id)
      state.totalAllPricesOfProducts = state.Products.reduce((current , item) => current + +item.total , 0)
      state.cartCount = state.Products.length
    }
  }
})

export const { addProductToCart , ProductIncrement, ProductDecrement, deleteProduct } = logicSlice.actions

export default logicSlice.reducer