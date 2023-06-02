import economy from "../../images/largeImages/economy_image.png";
import { useSelector } from "react-redux";
import Button from "../ui/button";
import { Link } from "react-scroll";
import "./economy.css";

const Economy = ({ isOpen }) => {
  const pageWidth = useSelector((state) => state.width.pageWidth);
  return (
    <section className="economy">
      {pageWidth > 960 ? (
        <div className="economy__container">
          <div className="economy__column">
            <img src={economy} alt="economy" className="economy__image" />
          </div>
          <div className="economy__column">
            <h2 className="economy__title">10% ОТ СУММЫ КОНТРАКТА</h2>
            <h3 className="economy__subtitle">Почему это выгодно для вас?</h3>
            <p className="economy__text">
              Вот пример, как мы сэкономили для клиента 12 700$ на поставке{" "}
              <span className="economy__text_span">системы лазерной сварки OREE LASER.</span>
            </p>
            <div className="economy__table">
              <div className="economy__table-column">
                <p className="economy__table-title">Покупка с наценкой в РФ</p>
                <h4 className="economy__table-usd">21 700 USD</h4>
              </div>
              <div className="economy__table-column">
                <p className="economy__table-title">Наш расчет</p>
                <h4 className="economy__table-usd">8 900 USD</h4>
              </div>
            </div>
            <h2 className="economy__title">
              ДЕШЕВЛЕ НА <span className="economy__title_span">12 700 USD</span>
            </h2>
            <button className="economy__button" type="button" onClick={isOpen}>
              <p className="economy__button-text">Детализация</p>
            </button>
          </div>
        </div>
      ) : (
        <div className="economy__container">
          <div className="economy__column">
            <h2 className="economy__title">10% ОТ СУММЫ КОНТРАКТА</h2>
            <h5 className="economy__subtitle">Почему это выгодно для вас?</h5>
            <p className="economy__text">
              Пример, как мы сэкономили для клиента 12 745$ на поставке лазерной сварки OREE LASER
            </p>
            <div className="economy__column">
              <img src={economy} alt="economy" className="economy__image" />
            </div>
            <div className="economy__table">
              <div className="economy__table-column">
                <p className="economy__table-title">Покупка с наценкой в РФ</p>
                <h4 className="economy__table-usd">21 700 USD</h4>
              </div>
              <div className="economy__table-column">
                <p className="economy__table-title">Наш расчет</p>
                <h4 className="economy__table-usd">8 955 USD</h4>
              </div>
            </div>
            <button className="economy__button" type="button" onClick={isOpen}>
              <p className="economy__button-text">Детализация</p>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Economy;
