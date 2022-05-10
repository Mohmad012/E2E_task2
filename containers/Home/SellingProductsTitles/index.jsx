import Div from "../../../components/Div";
import Atag from "../../../components/Atag";
import LiTag from "../../../components/LiTag";

const SellingProductsTitles = ({data}) => {

  return (
    <Div className="heading heading-center mb-3">
      <h2 className="title">{data.title}</h2>
      <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
        {data?.navItems?.map((item , key) => (
          <LiTag className="nav-item" key={key}>
            <Atag
              className={`nav-link ${item.active && "active"}`}
              id={item.ID}
              data-toggle="tab"
              href={item.href}
              role="tab"
              aria-controls={item.ariaControls}
              aria-selected={item.ariaSelected}
            >
              {item.text}
            </Atag>
          </LiTag>
        ))}
      </ul>
    </Div>
  );
}

export default SellingProductsTitles;
