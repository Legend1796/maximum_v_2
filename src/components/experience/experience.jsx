import React from "react";
import "./experience.css";
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

const Experience = () => {
  return (
    <section>
      <div className="exp__container">
        <h2 className="exp__title">Богатый опыт в подборе и поставке металлообабатывающего оборудования</h2>
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
            <p className="exp__text">Станки электроэрозионной резки</p>
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
            <p className="exp__text">Песок для гидроабразивной резки</p>
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
        <h3 className="exp__bottom-title">Мне нужно металлообрабатывающее оборудование</h3>
        <div className="bottom__container">
          <Button type="button" typeButton="primary">
            <p>Оставить заявку</p>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
