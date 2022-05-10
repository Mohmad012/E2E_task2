import data from "../../data/static.json"

const Footer = () => {
    return (

      <footer className="footer footer-2">
        <div className="footer-bottom">
          <div className="container">
            <p className="footer-copyright">{data[0].FooterData.footerCopyright}</p>
            <ul className="footer-menu">
              {data[0].FooterData.footerMenu.map((item , key) => <li key={key}><a href="#">{item.text}</a></li>) }
            </ul>
            <div className="social-icons social-icons-color">
              <span className="social-label">{data[0].FooterData.socialIcons.socialLabel}</span>
              {data[0].FooterData.socialIcons.socialIconsList.map((item , key) => (
                <a href="#" key={key} className={item.ClassLink} title={item.title}target="_blank"><i className={item.ClassIco} /></a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer