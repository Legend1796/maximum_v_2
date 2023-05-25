import logo from "../../images/logo.svg";
import tg from "../../images/icons/tg.svg";
import wa from "../../images/icons/wa.svg";
import { NavLink } from "react-router-dom";
import { Element, Link } from "react-scroll";
import { useSelector } from "react-redux";
import Button from "../ui/button";
import "./header.css";

function Header() {
  const pageWidth = useSelector((state) => state.width.pageWidth);
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-and-desc">
          <Element className="header__logo" name="/">
            <NavLink className="header__logo" to="/">
              <img src={logo} alt="logo" className="header__logo" />
            </NavLink>
          </Element>
          <p className="header__description">Организация импорта для промышленных предприятий</p>
        </div>
        {pageWidth >= 960 ? (
          <div className="header__contacts">
            <a href="tg://resolve?domain=maximum_import" className="header__link header__link_wa">
              <img src={tg} alt="telegram" className="header__image" />
            </a>
            <a href="https://wa.me/79995241046" className="header__link">
              <img src={wa} alt="watsApp" className="header__image" />
            </a>
            <a href="tel:+7 812 200 46 43" className="header__link header__link_phone">
              +7 (812) 200 46 43
            </a>
            <Link className="promo__button" to="form-promo" spy={true} smooth={true} offset={-120} duration={400}>
              <Button type="button" typeButton="primary">
                <p>Перезвоните мне</p>
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="header__contacts">
              <a href="tg://resolve?domain=maximum_import" className="header__link header__link_wa">
                <img src={tg} alt="telegram" className="header__image" />
              </a>
              <a href="https://wa.me/79995241046" className="header__link">
                <img src={wa} alt="watsApp" className="header__image" />
              </a>
              <a href="tel:+7 812 200 46 43" className="header__link header__link_phone">
                +7 (812) 200 46 43
              </a>
            </div>
            <Button type="button" typeButton="primary">
              <p>Перезвоните мне</p>
            </Button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
