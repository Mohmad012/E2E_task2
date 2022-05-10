import Div from "../../../components/Div";
import Atag from "../../../components/Atag";
import SpanTag from "../../../components/SpanTag"
import ITag from "../../../components/ITag"


const ProductItem = ({
  title,
  count,
  price,
  img,
  id,
  deleteProductHandler
}) => {

  return (
      <Div className="product">
        <Div className="product-cart-details">
          <h4 className="product-title">
            <Atag>{title}</Atag>
          </h4>
          <SpanTag className="cart-product-info">
            <SpanTag className="cart-product-qty">{count}</SpanTag>
            x ${price}
          </SpanTag>
        </Div>
        <figure className="product-image-container">
          <Atag className="product-image">
            <imgImgTag src={img} alt="product" />
          </Atag>
        </figure>
        <button onClick={() => deleteProductHandler(id)} className="btn-remove"><ITag className="icon-close" /></button>
      </Div>
  );
}

export default ProductItem;