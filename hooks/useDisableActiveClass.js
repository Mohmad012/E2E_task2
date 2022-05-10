import { useEffect , useState , useMemo} from 'react';

import { useSelector } from 'react-redux'

const useDisableActiveClass = (id) => {

  const [disableAddProduct , setDisableAddProduct] = useState(false)
  const ProductsIsAdded = useSelector((state) => state.logic.ProductsIsAdded)

  useEffect(() => {
      ProductsIsAdded.filter((Product) => Product.id === id).length > 0 ? setDisableAddProduct(true) : setDisableAddProduct(false)
  },[id , ProductsIsAdded])

  let disableAddProductActiveClass = useMemo(() => disableAddProduct ? "disabled" : "" , [disableAddProduct])

  return{
    disableAddProduct,
    disableAddProductActiveClass
  }

};

export default useDisableActiveClass