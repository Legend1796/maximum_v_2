import React from "react";
import "./manager.css";
import manager from "../../images/photo_1.png";
import list from "../../images/icons/list.svg";
import Button from "../ui/button";

const Manager = () => {
  return (
    <section className="manager">
      <h2 className="manager__title">ВСЕ ВОПРОСЫ РЕШАЕТ ПЕРСОНАЛЬНЫЙ МЕНЕДЖЕР</h2>
      <div className="manager__managers">
        <div className="manager__managers-container">
          <ul>
            <li className="manager__man">
              <img src={manager} alt="manager" className="manager__photo" />
              <div className="manager__about">
                <p className="manager__surname">Aaaaaaaaaaa</p>
                <p className="manager__name">Aaaaaaaaaaa</p>
              </div>
            </li>
            <li className="manager__man">
              <img src={manager} alt="manager" className="manager__photo" />
              <div className="manager__about">
                <p className="manager__surname">Bbbbbbbbbbb</p>
                <p className="manager__name">Bbbbbbbbbbb</p>
              </div>
            </li>
            <li className="manager__man">
              <img src={manager} alt="manager" className="manager__photo" />
              <div className="manager__about">
                <p className="manager__surname">Cccccccccc</p>
                <p className="manager__name">Cccccccccc</p>
              </div>
            </li>
            <li className="manager__man">
              <img src={manager} alt="manager" className="manager__photo" />
              <div className="manager__about">
                <p className="manager__surname">Dddddddddd</p>
                <p className="manager__name">Dddddddddd</p>
              </div>
            </li>
          </ul>
          <ul>
            <li className="manager__man">
              <img src={manager} alt="manager" className="manager__photo" />
              <div className="manager__about">
                <p className="manager__surname">Aaaaaaaaaaa</p>
                <p className="manager__name">Aaaaaaaaaaa</p>
              </div>
            </li>
            <li className="manager__man">
              <img src={manager} alt="manager" className="manager__photo" />
              <div className="manager__about">
                <p className="manager__surname">Bbbbbbbbbbb</p>
                <p className="manager__name">Bbbbbbbbbbb</p>
              </div>
            </li>
            <li className="manager__man">
              <img src={manager} alt="manager" className="manager__photo" />
              <div className="manager__about">
                <p className="manager__surname">Cccccccccc</p>
                <p className="manager__name">Cccccccccc</p>
              </div>
            </li>
            <li className="manager__man">
              <img src={manager} alt="manager" className="manager__photo" />
              <div className="manager__about">
                <p className="manager__surname">Dddddddddd</p>
                <p className="manager__name">Dddddddddd</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="manager__container">
        <div className="manager__desc">
          <ul className="manager__works">
            <li className="manager__work">
              <img src={list} alt="list" />
              <div className="manager__text">
                Оформит заключение контракта, организует логистику и таможенные платежи с учетом особенностей импорта
                данного товара на территорию РФ
              </div>
            </li>
            <li className="manager__work">
              <img src={list} alt="list" />
              <div className="manager__text">
                Поможет с уточнением любой, в том числе технической информации у выбранного поставщика
              </div>
            </li>
            <li className="manager__work">
              <img src={list} alt="list" />
              <div className="manager__text">Определит и подберет зарубежных поставщиков</div>
            </li>
          </ul>
          <ul className="manager__works">
            <li className="manager__work">
              <img src={list} alt="list" />
              <div className="manager__text">Осуществит расчет себестоимости импорта от выбранных поставщиков</div>
            </li>
            <li className="manager__work">
              <img src={list} alt="list" />
              <div className="manager__text">Всегда на связи и ответит на любые ваши вопросы</div>
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
        <div className="manager__button-container">
          <Button type="button" typeButton="primary">
            <p>Оставить заявку</p>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Manager;
