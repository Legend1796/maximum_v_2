import React from "react";
import "./popup.css";
import closePopup from "../../images/closePopup.svg";

const Popup = ({ onClose, isOpen }) => {
  return (
    <div className={isOpen ? "popup popup_opened" : "popup"}>
      <button onClick={onClose} className="popup__overlay" />
      <div className="popup__container">
        <h5 className="popup__title">Стоимость по контракту 5900 USD</h5>
        <button onClick={onClose} className="popup__close" type="button">
          <img src={closePopup} alt="closePopup" />
        </button>
        <table class="popup__table">
          <tbody>
            <tr>
              <td class="popup__name">
                <h4>НДС</h4>
              </td>
              <td class="popup__cost">
                <p>1 340 USD</p>
              </td>
            </tr>
            <tr>
              <td class="popup__name">
                <h4>Сборы</h4>
              </td>
              <td class="popup__cost">
                <p>135 USD</p>
              </td>
            </tr>
            <tr>
              <td class="popup__name">
                <h4>Банковские расходы</h4>
              </td>
              <td class="popup__cost">
                <p>80 USD</p>
              </td>
            </tr>
            <tr>
              <td class="popup__name">
                <h4>Таможенное оформление</h4>
              </td>
              <td class="popup__cost">
                <p>200 USD</p>
              </td>
            </tr>
            <tr>
              <td class="popup__name">
                <h4>Транспортные расходы</h4>
              </td>
              <td class="popup__cost">
                <p>1 300 USD</p>
              </td>
            </tr>
          </tbody>
        </table>
        <h5 className="popup__full-cost">Итого: 8 955 USD</h5>
        <table class="popup__table">
          <tbody>
            <tr>
              <td class="popup__name">
                <h4>Наши услуги</h4>
              </td>
              <td class="popup__cost popup__cost_percent">
                <p>1 500 USD</p>
                <p className="popup__percent">10% от стоимости по контракту, но не менее 1 500 USD</p>
              </td>
            </tr>
          </tbody>
        </table>
        <h5 className="popup__full-cost">Итого с нашими услугами под ключ 10 455 USD</h5>
      </div>
    </div>
  );
};

export default Popup;
