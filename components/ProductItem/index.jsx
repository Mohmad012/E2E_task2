import { useMemo } from "react";

import useDisableActiveClass from "../../hooks/useDisableActiveClass";

import Div from "../Div";
import Atag from "../Atag";
import ImgTag from "../ImgTag";
import SpanTag from "../SpanTag";
import H3Tag from "../H3Tag";

const ProductItem = ({
    addSale,
    addNew,
    imgUp,
    imgDown,
    addToWishlistText,
    category,
    title,
    addOldPrice,
    newPrice,
    oldPrice,
    price,
    addDots,
    colorUp,
    textUp,
    colorDown,
    textDown,
    action,
    showWithHoverImgHandler,
    ShownHoverImgUp,
    ShownHoverImgDown,
    id,
    addProductToCartHandler,
    handleDisabledBtn,
    count,
    total
}) => {

    const {disableAddProductActiveClass} = useDisableActiveClass(id)


    let productsData = useMemo(() => {
        return  {
            id,
            addSale,
            addNew,
            img:imgUp,
            addToWishlistText,
            category,
            title,
            addOldPrice,
            price,
            addDots,
            action,
            count,
            total
        }
    })


    return(
        <Div className="col-6 col-md-4 col-lg-3 col-xl-5col">
            <Div className="product product-11 text-center">
                <figure className="product-media">
                    {addSale && <SpanTag className="product-label label-circle label-sale">Sale</SpanTag>}
                    {addNew && <SpanTag className="product-label label-circle label-new">New</SpanTag>}
                    {addDots ? (
                        <Atag
                            onMouseEnter={() => showWithHoverImgHandler(true , "downImg")}
                            onMouseLeave={() => showWithHoverImgHandler(false , "upImg")}
                        >
                            <ImgTag src={imgUp} alt="Product image" className="product-image" />
                            <ImgTag src={imgDown} alt="Product image" className="product-image-hover" />
                        </Atag>
                    ) : (
                        <Atag>
                            <ImgTag src={imgUp} alt="Product image" className="product-image" />
                            <ImgTag src={imgDown} alt="Product image" className="product-image-hover" />
                        </Atag>
                    )}
                    <Div className="product-action-vertical">
                        <Atag className="btn-product-icon btn-wishlist "><SpanTag>{addToWishlistText}</SpanTag></Atag>
                    </Div>
                </figure>
                <Div className="product-body">
                    <Div className="product-cat">
                        <Atag href="#">{category}</Atag>
                    </Div>
                    <H3Tag className="product-title"><Atag>{title}</Atag></H3Tag>
                    <Div className="product-price">
                        {addOldPrice ? (
                            <>
                                <SpanTag className="new-price">${newPrice}</SpanTag>
                                <SpanTag className="old-price">Was ${oldPrice}</SpanTag>
                            </>
                        ) : price}
                    </Div>
                    {addDots && (
                        <Div className="product-nav product-nav-dots">
                            <Atag className={`${ShownHoverImgUp}`} style={{backgroundColor: colorUp}}><SpanTag className="sr-only">{textUp}</SpanTag></Atag>
                            <Atag className={`${ShownHoverImgDown}`} style={{backgroundColor: colorDown}}><SpanTag className="sr-only">{textDown}</SpanTag></Atag>
                        </Div>
                    )}
                </Div>
                <Div className="product-action">
                    <Atag
                        disabled={handleDisabledBtn(id)}
                        className={`btn-product btn-cart ${disableAddProductActiveClass}`}
                        onClick={() => addProductToCartHandler(productsData)}
                    ><SpanTag>{action}</SpanTag></Atag>
                </Div>
            </Div>
        </Div>
    )
}

export default ProductItem