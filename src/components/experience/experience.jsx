import { Link } from "react-scroll";
import { useSelector } from "react-redux";
import laser from "../../images/grid/1.svg";
import lathes from "../../images/grid/2.svg";
import milling from "../../images/grid/3.svg";
import cutting from "../../images/grid/4.svg";
import bending from "../../images/grid/5.svg";
import sheetBending from "../../images/grid/6.svg";
import laserWelding from "../../images/grid/7.svg";
import rollers from "../../images/grid/8.svg";
import scissorLifts from "../../images/grid/9.svg";
import forFittings from "../../images/grid/10.svg";
import waterJet from "../../images/grid/11.svg";
import sand from "../../images/grid/12.svg";
import pipe from "../../images/grid/13.svg";
import spare from "../../images/grid/14.svg";
import Button from "../ui/button";
import "./experience.css";

const Experience = () => {
  const pageWidth = useSelector((state) => state.width.pageWidth);
  return (
    <section className="exp">
      <div className="exp__container">
        <h2 className="exp__title">
          {pageWidth > 959
            ? "Богатый опыт в подборе и поставке металлообабатывающего оборудования"
            : "Богатый опыт в подборе и поставке металлообабатыв ающего оборудования"}
        </h2>
        <h5 className="exp__subtitle">У нас есть проверенные поставщики практически по всем направлениям</h5>
        <ul className="exp__grid-container">
          <li className="exp__grid-item">
            <img src={laser} alt="Станки лазерной резки листа и труб" />
            <p className="exp__text">Станки лазерной резки листа и труб</p>
          </li>
          <li className="exp__grid-item">
            <img src={lathes} alt="Токарные станки с чпу и без" />
            <p className="exp__text">Токарные станки с чпу и без</p>
          </li>
          <li className="exp__grid-item">
            <img src={milling} alt="Фрезерные станки" />
            <p className="exp__text">Фрезерные станки</p>
          </li>
          <li className="exp__grid-item">
            <img src={cutting} alt="Станки электроэрозионной резки" />
            <p className="exp__text">
              {pageWidth > 959 ? "Станки электроэрозионной резки" : "Станки электроэрозион ной резки"}
            </p>
          </li>
          <li className="exp__grid-item">
            <img src={bending} alt="Роботы для гибочных станков" />
            <p className="exp__text">Роботы для гибочных станков</p>
          </li>
          <li className="exp__grid-item">
            <img src={sheetBending} alt="Листогибочные станки" />
            <p className="exp__text">Листогибочные станки</p>
          </li>
          <li className="exp__grid-item">
            <img src={laserWelding} alt="Станки лазерной сварки" />
            <p className="exp__text">Станки лазерной сварки</p>
          </li>
          <li className="exp__grid-item">
            <img src={rollers} alt="Вальцы" />
            <p className="exp__text">Вальцы</p>
          </li>
          <li className="exp__grid-item">
            <img src={scissorLifts} alt="Ножничные подъемники" />
            <p className="exp__text">Ножничные подъемники</p>
          </li>
          <li className="exp__grid-item">
            <img src={forFittings} alt="Резчики и гибочники для арматуры" />
            <p className="exp__text">Резчики и гибочники для арматуры</p>
          </li>
          <li className="exp__grid-item">
            <img src={waterJet} alt="Станки гидроабразивной резки" />
            <p className="exp__text">Станки гидроабразивной резки</p>
          </li>
          <li className="exp__grid-item">
            <img src={sand} alt="Песок для гидроабразивной резки" />
            <p className="exp__text">
              {pageWidth > 959 ? "Песок для гидроабразивной резки" : "Песок для гидроабразив ной резки"}
            </p>
          </li>
          <li className="exp__grid-item">
            <img src={pipe} alt="Трубогибочные станки" />
            <p className="exp__text">Трубогибочные станки</p>
          </li>
          <li className="exp__grid-item">
            <img src={spare} alt="Запчасти для станков лазерной резки" />
            <p className="exp__text">Запчасти для станков лазерной резки</p>
          </li>
        </ul>
        <h4 className="exp__bottom-title">
          <span className="exp__bottom-title_blue">Мне нужно </span>металлообрабатывающее оборудование
        </h4>
        <div className="bottom__container">
          <Link className="promo__button" to="form-seller" spy={true} smooth={true} offset={-120} duration={1400}>
            <Button type="button" typeButton="primary">
              <p>Оставить заявку</p>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;
