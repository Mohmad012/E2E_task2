import {useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link';
import dynamic from "next/dynamic";
import { useSelector } from 'react-redux'

import Div from "../../components/Div";
import ImgTag from "../../components/ImgTag";
import Atag from "../../components/Atag";
import SpanTag from "../../components/SpanTag"
import ITag from "../../components/ITag"

import ProductItem from './ProductItem';

import useScript from '../../hooks/useScript';
import useProcessesOnProductToCart from '../../hooks/useProcessesOnProductToCart';

import {openMenu} from '../../utils';
import data from "../../data/static.json"

dynamic(
  () => {
    return import('../../assets/js/main.js');
  },
  { ssr: false }
);

const Header = () => {

  useScript("../../assets/js/jquery.plugin.min.js")
  useScript("../../assets/js/owl.carousel.min.js")
  useScript("../../assets/js/demos/demo-2.js")
  useScript("../../assets/js/main.js")

  const Products = useSelector((state) => state.logic.Products)
  const totalAllPricesOfProducts = useSelector((state) => state.logic.totalAllPricesOfProducts)
  const cartCount = useSelector((state) => state.logic.cartCount)
  const {deleteProductHandler} = useProcessesOnProductToCart()

  useEffect(() => {
    openMenu()
  },[])

  return (
      <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="robots" content="noindex, follow" />
            <meta
                name="description"
                content="Hope – Health &amp; Medical React JS Template"
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

            <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js" integrity="sha512-TqmAh0/sSbwSuVBODEagAoiUIeGRo8u95a41zykGfq5iPkO9oie8IKCgx7yAr1bfiBjZeuapjLgMdp9UMpCVYQ==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
            
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.hoverintent/1.10.0/jquery.hoverIntent.min.js" integrity="sha512-DM23ufgpnIXqIh9SK9pXpWX3Bms+lbarOt6xMDXqRn31WTcjxXK0Ga7foqRIElu/V/0Jx27o+3vXNhl4KJ99OA==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/superfish/1.7.10/js/superfish.min.js" integrity="sha512-gdhtclwUZCkHSSb/Q79++RssWL4eDLKHO15TC7kR/XnvlNyzcvZDRLn4BIuxadMWGIxPuj/IbFBInMpYockVCA==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js" integrity="sha512-IsNh5E3eYy3tr/JiX2Yx4vsCujtkhwl7SLqgnwLNgf04Hrt9BT9SXlLlZlWx+OK4ndzAoALhsMNcCmkggjZB1w==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
        </Head>

        <header className="header header-2 header-intro-clearance">
          <Div className="header-middle">
            <Div className="container">
              <Div className="header-left">
                <button className="mobile-menu-toggler">
                  <SpanTag className="sr-only">{data[0]?.HeaderData?.mobileMenuTogglerText}</SpanTag>
                  <ITag className="icon-bars" />
                </button>
                <Atag className="logo">
                  <ImgTag src="./assets/images/demos/demo-2/logo.png" alt="Molla Logo" width={105} height={25} />
                </Atag>
              </Div>
              <Div className="header-right">
                <Div className="dropdown cart-dropdown">
                  
                    <Atag href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                      <ITag className="icon-shopping-cart" />
                      {Products.length > 0 && <SpanTag className="cart-count">{cartCount > 9 ? "9+" : cartCount}</SpanTag> }
                    </Atag>
                  <Div className="dropdown-menu dropdown-menu-right">
                    <Div className="dropdown-cart-products">

                      {Products.length > 0 ? Products.length > 5 ? Products.slice(0,5).map((item , key) => (

                        <ProductItem
                          key={key}
                          title={item.title}
                          count={item.count}
                          price={item.price}
                          img={item.img}
                          id={item.id}
                          deleteProductHandler={deleteProductHandler}
                        />

                      )) :

                      Products.map((item , key) => (

                        <ProductItem
                          key={key}
                          title={item.title}
                          count={item.count}
                          price={item.price}
                          img={item.img}
                          id={item.id}
                          deleteProductHandler={deleteProductHandler}
                        />

                      )): <p className="text-center my-5">{data[0]?.HeaderData?.msgEmptyCart}</p>}

                    </Div>
                    {Products.length > 0 && (
                      <Div className="dropdown-cart-total">
                        <SpanTag>{data[0]?.HeaderData?.TotalText}</SpanTag>
                        <SpanTag className="cart-total-price">${totalAllPricesOfProducts}</SpanTag>
                      </Div>
                    )}
                    <Div className="dropdown-cart-action">
                      <Link href="/Cart">
                        <Atag className="btn btn-primary">{data[0]?.HeaderData?.ViewCartText}</Atag>
                      </Link>
                    </Div>
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </header>
      </>
  );
}

export default Header;