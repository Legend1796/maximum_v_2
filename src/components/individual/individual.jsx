import "./individual.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Individual = () => {
  return (
    <section className="individual">
      <div className="individual__container">
        <h2 className="individual__title">Инвивидуальный подход к каждой поставке</h2>
        <h4 className="individual__subtitle">Примеры доставленного оборудования</h4>
        {/* <OwlCarousel>
          <div class="item">
            <div className="individual__item">
              <div className="individual__column">
                <div className="individual__image"></div>
              </div>
              <div className="individual__column"></div>
            </div>
          </div>
        </OwlCarousel> */}
      </div>
    </section>
  );
};

export default Individual;
