import CartContainer from '../containers/Cart'
import Layout from "../layout"

const Cart = () => {

  return (
    <div className="page-wrapper">
      <Layout>
        <CartContainer />
      </Layout>
    </div>
  )
}

export default Cart;