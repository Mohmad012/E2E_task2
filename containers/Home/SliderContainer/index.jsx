import Div from "../../../components/Div";
import Atag from "../../../components/Atag";
import SpanTag from "../../../components/SpanTag";
import H3Tag from "../../../components/H3Tag";
import ITag from "../../../components/ITag";

const SliderContainer = ({data}) => {

  return (
    <Div className="intro-slider-container">
      <Div className="owl-carousel owl-simple owl-light owl-nav-inside" data-toggle="owl">
        
        {data?.map((item , key) => (
          <Div key={key} className="intro-slide" style={{backgroundImage: `url(${item.img})`}}>
            <Div className="container intro-content">
              <H3Tag className="intro-subtitle">{item.title}</H3Tag>

              <h1 className="intro-title">
                {item.introTitle[0]} <br />
                {item.introTitle[1]} {item.addLastBr && <br />}
                {item.addPrice && (
                  <SpanTag className="text-primary">
                    {item.addFromText && <sup className="text-white font-weight-light">{item.FromWord}</sup>}
                    <sup>{item.price[0]}</sup>{item.price[1]}
                  </SpanTag>
                )}
              </h1>

              <Atag className="btn btn-primary">
                <SpanTag>{item.ShopNowBtn}</SpanTag>
                <ITag className="icon-long-arrow-right" />
              </Atag>

            </Div>
          </Div>
        ))}
        
      </Div>
      <SpanTag className="slider-loader text-white"></SpanTag>
    </Div>
  );
}

export default SliderContainer;
