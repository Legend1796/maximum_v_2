import "./individual.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { data } from "../../utils/individual-data";
import Item from "./item/item";

const Individual = () => {
  const options = {
    loop: true,
    center: true,
    items: 1,
    margin: 0,
    dots: true,
    nav: true,
    // navContainer: true,
  };

  return (
    <section className="individual">
      <div className="individual__container">
        <h2 className="individual__title">Инвивидуальный подход к каждой поставке</h2>
        <h4 className="individual__subtitle">Примеры доставленного оборудования</h4>
        <OwlCarousel className="owl-carousel owl-theme" {...options}>
          {data.map((company) => (
            <Item company={company} key={company.id} />
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Individual;
