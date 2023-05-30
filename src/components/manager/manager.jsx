import sofia from "../../images/managers/sofia.png";
import vladimir from "../../images/managers/vladimir.png";
import nasty from "../../images/managers/nasty.png";
import list from "../../images/icons/list.svg";
import Button from "../ui/button";
import { Link } from "react-scroll";
import "./manager.css";

const Manager = () => {
  return (
    <section className="manager">
      <h2 className="manager__title">ВСЕ ВОПРОСЫ РЕШАЕТ ПЕРСОНАЛЬНЫЙ МЕНЕДЖЕР</h2>

      <div className="manager__container">
        <div className="manager__desc">
          <ul className="manager__works">
            <li className="manager__work">
              <img src={list} alt="list" />
              <div className="manager__text">Осуществит расчет себестоимости импорта</div>
            </li>
            <li className="manager__work">
              <img src={list} alt="list" />
              <div className="manager__text">Организует логистику и таможенные платежи</div>
            </li>
            <li className="manager__work">
              <img src={list} alt="list" />
              <div className="manager__text">Оформит заключение контракта</div>
            </li>
            <li className="manager__work">
              <img src={list} alt="list" />
              <div className="manager__text">Определит и подберет зарубежных поставщиков</div>
            </li>
          </ul>
          <ul className="manager__works">
            <li className="manager__work">
              <img src={list} alt="list" />
              <div className="manager__text">Уточнить техническую информацию, для выбранного продукта</div>
            </li>
            <li className="manager__work">
              <img src={list} alt="list" />
              <div className="manager__text">Всегда на связи и ответит на любые вопросы</div>
            </li>
            <li className="manager__work">
              <img src={list} alt="list" />
              <div className="manager__text">Соберет все коммерческие предложения</div>
            </li>
            <li className="manager__work">
              <img src={list} alt="list" />
              <div className="manager__text">Обеспечит слежение груза в режиме онлайн</div>
            </li>
          </ul>
        </div>
        <ul className="manager__managers">
          <li className="manager__man">
            <img src={sofia} alt="manager" className="manager__photo" />
            <div className="manager__about">
              <h4 className="manager__name">Бородяева София</h4>
              <p className="manager__job">Менеджер</p>
              <p className="manager__country">Направление: Китай</p>
            </div>
          </li>
          <li className="manager__man">
            <img src={vladimir} alt="manager" className="manager__photo" />
            <div className="manager__about">
              <h4 className="manager__name">Бородяева София</h4>
              <p className="manager__job">Менеджер</p>
              <p className="manager__country">Направление: Китай</p>
            </div>
          </li>
          <li className="manager__man">
            <img src={nasty} alt="manager" className="manager__photo" />
            <div className="manager__about">
              <h4 className="manager__name">Бородяева София</h4>
              <p className="manager__job">Менеджер</p>
              <p className="manager__country">Направление: Китай</p>
            </div>
          </li>
        </ul>
        <div className="manager__button-container">
          <Link className="promo__button" to="form-seller" spy={true} smooth={true} offset={-120} duration={400}>
            <Button type="button" typeButton="primary">
              <p className="manager__button-text">Оставить заявку</p>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Manager;
