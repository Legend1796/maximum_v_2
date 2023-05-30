import { useSelector } from "react-redux";
import Form from "../form/form";
import promoImage from "../../images/largeImages/promo_image.svg";
import promoImageTablet from "../../images/largeImages/promoImageTablet.svg";
import promoImageMobile from "../../images/largeImages/promoImageMobile.svg";
import "./promo.css";
import First from "../svg-images/first/first";
import FirstLines from "../svg-images/first/firstLines";

const Promo = ({ setIsLoading }) => {
  const pageWidth = useSelector((state) => state.width.pageWidth);
  return (
    <section>
      <div className="promo__container" id="form-promo">
        {pageWidth < 990 ? (
          <div className="promo__image-and-text">
            <div className="promo__text-block">
              <h6 className="promo__text-title">Любое импортное оборудование</h6>
              <p className="promo__text-text">материалы или комплектующие изделия «под заказ».</p>
            </div>
            <div className="promo__text-block">
              <h6 className="promo__text-title">Выгоднее на ~40%</h6>
              <p className="promo__text-text">чем покупка в Россиии</p>
            </div>
            <img className="promo__image" src={promoImageMobile} alt="катинка станка" />
            <div className="promo__text-block">
              <h6 className="promo__text-title">100% прозрачности</h6>
              <p className="promo__text-text">расчетов и наценки</p>
            </div>
            <div className="promo__text-block">
              <h6 className="promo__text-title">Полный сервис</h6>
              <p className="promo__text-text">от поиска до поставки под ключ</p>
            </div>
            <div className="promo__text-block">
              <h6 className="promo__text-title">Эксперты в подборе</h6>
              <p className="promo__text-text">металлообрабатывающего оборудования</p>
            </div>
          </div>
        ) : (
          <div className="promo__image-and-text">
            <First />
            <FirstLines />
            {/* <div className="promo__text-block">
              <h6 className="promo__text-title">Любое импортное оборудование</h6>
              <p className="promo__text-text">материалы или комплектующие изделия «под заказ».</p>
            </div>
            <img
              className="promo__image"
              src={pageWidth >= 1440 ? promoImage : promoImageTablet}
              alt="катинка станка"
            />
            <div className="promo__button-text-blocks">
              <div className="promo__text-block promo__text-block_m">
                <h6 className="promo__text-title">Полный сервис</h6>
                <p className="promo__text-text">от поиска до поставки под ключ</p>
              </div>
              <div className="promo__text-block">
                <h6 className="promo__text-title">Эксперты в подборе</h6>
                <p className="promo__text-text">металлообрабатывающего оборудования</p>
              </div>
            </div>
            <div className="promo__text-block promo__text-block_absolute promo__text-block_top">
              <h6 className="promo__text-title">Выгоднее на ~40%</h6>
              <p className="promo__text-text">чем покупка в Россиии</p>
            </div>
            <div className="promo__text-block promo__text-block_absolute promo__text-block_right">
              <h6 className="promo__text-title">100% прозрачности</h6>
              <p className="promo__text-text">расчетов и наценки</p>
            </div> */}
          </div>
        )}
        <Form setIsLoading={setIsLoading} />
      </div>
    </section>
  );
};

export default Promo;
