import Div from "../../../components/Div";
import H3Tag from "../../../components/H3Tag";
import ImgTag from "../../../components/ImgTag";
import Atag from "../../../components/Atag";
import ITag from "../../../components/ITag"


const CartItem = ({
  img,
  title,
  price,
  count,
  total,
  id,
  ProductDecrementHandler,
  ProductIncrementHandler,
  deleteProductHandler
}) => {

    return (
        <tr>
          <td className="product-col">
            <Div className="product">
              <figure className="product-media">
                <Atag href="#">
                  <ImgTag src={img} alt="Product image" />
                </Atag>
              </figure>
              <H3Tag className="product-title">
                <Atag href="#">{title}</Atag>
              </H3Tag>
            </Div>
          </td>
          <td className="price-col">${price}</td>
          <td className="quantity-col">
            <Div className="cart-product-quantity">
              <Div className="input-group  input-spinner d-flex justify-content-center">
                <Div className="input-group-prepend"><button onClick={() => ProductDecrementHandler(id)} style={{minWidth: '26px'}} className="btn btn-decrement btn-spinner" type="button"><i className="icon-minus" /></button></Div>
                <span className="currCount">{count}</span>
                <Div className="input-group-append"><button onClick={() => ProductIncrementHandler(id)} style={{minWidth: '26px'}} className="btn btn-increment btn-spinner" type="button"><i className="icon-plus" /></button></Div>
              </Div>
            </Div>
          </td>
          <td className="total-col">${total}</td>
          <td className="remove-col"><button onClick={() => deleteProductHandler(id)} className="btn-remove"><ITag className="icon-close" /></button></td>
        </tr>
    );
};

export default CartItem