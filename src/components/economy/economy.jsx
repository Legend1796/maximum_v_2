import React from "react";
import "./economy.css";
import economy from "../../images/largeImages/economy_image.svg";
import Button from "../ui/button";

const Economy = () => {
  return (
    <section className="economy">
      <div className="economy__container">
        <div className="economy__column">
          <h2 className="economy__title">10% ОТ СУММЫ КОНТРАКТА</h2>
          <h5 className="economy__subtitle">Почему это выгодно для вас?</h5>
          <p className="economy__text">
            Пример, как мы сэкономили для клиента 12 745$ на поставке лазерной сварки OREE LASER
          </p>
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
          <button className="economy__button" type="button">
            <p className="economy__button-text">Детализация</p>
          </button>
        </div>
        <div className="economy__column">
          <img src={economy} alt="economy" className="economy__image" />
        </div>
      </div>
      <div className="economy__bottom">
        <h5 className="economy__bottom-title">
          У вас появится понимание, сколько оборудование или материалы стоят на зарубежном рынке, а так же точные
          расходы на импорт. Вы даже сможете прикинуть, сколько наценивают местные компании из РФ.{" "}
        </h5>
        <Button type="button" typeButton="primary">
          Начать сотрудничество
        </Button>
      </div>
    </section>
  );
};

export default Economy;
