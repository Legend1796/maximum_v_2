import React from "react";
import "./feedback.css";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import "owl.carousel/dist/assets/jquery.min.js";

import OwlCarousel from "react-owl-carousel";

const Feedback = () => {
  return (
    <section className="feedback">
      <div className="feedback__container">
        <h2 className="feedback__title">Убедитесь в прозрачности и честности поставки</h2>
        <h5 className="feedback__subtitle">
          Для каждой поставки мы создаем онлайн чат, в котором находитесь вы, ваш персональный менеджер и поставщик
          оборудования. В данном чате вы сможете оперативно уточнить любую информацию, а также следить за переговорами,
          условиями и ходом поставки.
        </h5>
        <div className="feedback__slider">
          {/* <OwlCarousel loop margin={10} nav>
            <div class="item">
              <h4>1</h4>
            </div>
            <div class="item">
              <h4>2</h4>
            </div>
            <div class="item">
              <h4>3</h4>
            </div>
            <div class="item">
              <h4>4</h4>
            </div>
          </OwlCarousel> */}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
