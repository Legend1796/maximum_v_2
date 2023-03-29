import React from "react";
import Form from "../form/form";
import "./promo.css";
import promoImage from "../../images/largeImages/promo_image.svg";

const Promo = () => {
  return (
    <section>
      <div className="promo__container">
        <Form />
        <div className="promo__image-and-text">
          <div className="promo__text-block">
            <h6 className="promo__text-title">Любое импортное оборудование</h6>
            <p className="promo__text-text">материалы или комплектующие изделия «под заказ».</p>
          </div>
          <img className="promo__image" src={promoImage} alt="катинка станка" />
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
            <h6 className="promo__text-title">В среднем на 40% выгоднее</h6>
            <p className="promo__text-text">покупки оборудования в РФ</p>
          </div>
          <div className="promo__text-block promo__text-block_absolute promo__text-block_right">
            <h6 className="promo__text-title">Гарантируем 110% прозрачности</h6>
            <p className="promo__text-text">расчетов и наценки</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
