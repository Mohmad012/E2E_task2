import {useEffect} from "react";
import { useSelector } from 'react-redux'
import dynamic from "next/dynamic";
import data from "../../data/static.json"
import {openMenu} from '../../utils';

import useProcessesOnProductToCart from "../../hooks/useProcessesOnProductToCart";

import Div from "../../components/Div";
import SpanTag from "../../components/SpanTag";
import BreadcrumbSec from "./BreadcrumbSec";
import CartItem from "./CartItem"

dynamic(
  () => {
    return import('../../assets/js/main.js');
  },
  { ssr: false }
);


const CartContainer = () => {

    useEffect(() => {
      openMenu()
    },[])

    const Products = useSelector((state) => state.logic.Products)

    const {
      ProductIncrementHandler,
      ProductDecrementHandler,
      deleteProductHandler
    } = useProcessesOnProductToCart()

    return (
      <main className="main">
        <Div className="page-header text-center" style={{backgroundImage: 'url("./assets/images/page-header-bg.jpg")'}}>
          <Div className="container">
            <h1 className="page-title">{data[0]?.CartData?.title[0]}<SpanTag>{data[0]?.CartData?.title[1]}</SpanTag></h1>
          </Div>
        </Div>
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <Div className="container">
            <ol className="breadcrumb">
              {data[0]?.CartData?.breadcrumb?.map((item , key) => (
                <BreadcrumbSec
                  key={key}
                  Class={item.Class}
                  addPath={item.addPath}
                  path={item.path}
                  text={item.text}

                />
              ))}
            </ol>
          </Div>
        </nav>
        <Div className="page-content">
          <Div className="cart">
            <Div className="container">
              <Div className="row">
                <Div className="col-lg-12">
                  <table className="table table-cart table-mobile">
                    <thead>
                      {Products.length > 0 && (
                        <tr>
                          {data[0]?.CartData?.pageContentTitles?.map((item , key) => <th key={key}>{item}</th> )}
                          <th />
                        </tr>
                      )}
                    </thead>
                    <tbody>

                      {Products.length > 0 ? Products?.map((item , key) => (

                        <CartItem
                          key={key}
                          img={item.img}
                          title={item.title}
                          price={item.price}
                          count={item.count}
                          total={item.total}
                          id={item.id}
                          ProductDecrementHandler={ProductDecrementHandler}
                          ProductIncrementHandler={ProductIncrementHandler}
                          deleteProductHandler={deleteProductHandler}
                        />

                      )) : <p className="text-center">{data[0]?.CartData?.msgEmptyCart}</p>}
 
                    </tbody>
                  </table>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </main>
    );
};

export default CartContainer