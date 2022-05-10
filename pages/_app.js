import {useEffect} from 'react'
import Head from 'next/head'
import {openMenu} from '../utils';
import { storeWrapper } from '../store'

import useScript from '../hooks/useScript';

import dynamic from "next/dynamic";
import '../assets/vendor/line-awesome/line-awesome/line-awesome/css/line-awesome.min.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/plugins/owl-carousel/owl.carousel.css'
import '../assets/css/plugins/magnific-popup/magnific-popup.css'
import '../assets/css/skin-demo-2.css'
import '../assets/css/demo-2.css'
import '../assets/css/style.css'

dynamic(
  () => {
    return import('../assets/js/main.js');
  },
  { ssr: false }
);

function App({ Component, pageProps }) {

  useScript("../assets/js/jquery.plugin.min.js")
  useScript("../assets/js/owl.carousel.min.js")
  useScript("../assets/js/demos/demo-2.js")
  useScript("../assets/js/main.js")

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
				<Component {...pageProps} />
  			</>
  		)	
}

export default storeWrapper.withRedux(App);