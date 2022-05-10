import {useEffect} from "react";

import data from "../../data/static.json"
import dynamic from "next/dynamic";

import Div from "../../components/Div";

import SliderContainer from "./SliderContainer";
import SellingProductsTitles from "./SellingProductsTitles";
import AllProductsSection from "./AllProductsSection"
import FurnitureProductsSection from "./FurnitureProductsSection"
import DecorProductsSection from "./DecorProductsSection"
import LightingProductsSection from "./LightingProductsSection"

import {openMenu} from '../../utils';

dynamic(
  () => {
    return import('../../assets/js/main.js');
  },
  { ssr: false }
);


const HomeContainer = () => {

  useEffect(() => {
    openMenu()
  },[])
  
  return (
    <main className="main">
      <SliderContainer data={data[0].sliderContainerData} />
      <br />
      <br />
      <SellingProductsTitles data={data[0].SellingProductsTitlesData} />
      <Div className="tab-content">
        <AllProductsSection data={data[0].AllProductsSectionData} />
        <FurnitureProductsSection data={data[0].FurnitureProductsSectionData} />
        <DecorProductsSection data={data[0].DecorProductsSectionData} />
        <LightingProductsSection data={data[0].LightingProductsSectionData} />
      </Div>
    </main>
  );
}

export default HomeContainer;