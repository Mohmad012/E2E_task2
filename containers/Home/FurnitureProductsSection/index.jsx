import Div from "../../../components/Div";
import ProductItem from "../../../components/ProductItem";
import useProcessesOnProductToCart from "../../../hooks/useProcessesOnProductToCart";

const FurnitureProductsSection = ({data}) => {


  const {
    addProductToCartHandler,
    handleDisabledBtn
  } = useProcessesOnProductToCart()

  return (
    <Div className="tab-pane p-0 fade" id="top-fur-tab" role="tabpanel" aria-labelledby="top-fur-link">
      <Div className="products">
        <Div className="row justify-content-center">
          
          {data?.map((item , key) => (
            <ProductItem
              key={key}
              id={item.id}
              addSale={item.addSale}
              addNew={item.addNew}
              imgUp={item.img[0]}
              imgDown={item.img[1]}
              addToWishlistText={item.addToWishlistText}
              category={item.category}
              title={item.title}
              addOldPrice={item.addOldPrice}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
              price={item.price}
              addDots={item.addDots}
              addActive={item.addActive}
              colorUp={item.colorUp}
              textUp={item.textUp}
              colorDown={item.colorDown}
              textDown={item.textDown}
              action={item.action}

              handleDisabledBtn={handleDisabledBtn}
              addProductToCartHandler={addProductToCartHandler}
              count={item.count}
              total={item.total}
            />
          ))}
          
        </Div>
      </Div>
    </Div>
  );
}

export default FurnitureProductsSection;
