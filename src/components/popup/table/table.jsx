import { useSelector } from "react-redux";
import closePopup from "../../../images/closePopup.svg";
import "./table.css";

const Table = ({ onClose }) => {
  const pageWidth = useSelector((state) => state.width.pageWidth);
  return (
    <div>
      <button onClick={onClose} className="popup__overlay" />
      <div className="popup__container">
        <h5 className="popup__title">Стоимость по контракту 5900 USD</h5>
        <button onClick={onClose} className="popup__close" type="button">
          <img src={closePopup} alt="closePopup" />
        </button>
        {pageWidth > 960 ? (
          <>
            <table className="popup__table">
              <tbody>
                <tr>
                  <td className="popup__name">
                    <h4>НДС</h4>
                  </td>
                  <td className="popup__cost">
                    <p>1 340 USD</p>
                  </td>
                </tr>
                <tr>
                  <td className="popup__name">
                    <h4>Сборы</h4>
                  </td>
                  <td className="popup__cost">
                    <p>135 USD</p>
                  </td>
                </tr>
                <tr>
                  <td className="popup__name">
                    <h4>Банковские расходы</h4>
                  </td>
                  <td className="popup__cost">
                    <p>80 USD</p>
                  </td>
                </tr>
                <tr>
                  <td className="popup__name">
                    <h4>Таможенное оформление</h4>
                  </td>
                  <td className="popup__cost">
                    <p>200 USD</p>
                  </td>
                </tr>
                <tr>
                  <td className="popup__name">
                    <h4>Транспортные расходы</h4>
                  </td>
                  <td className="popup__cost">
                    <p>1 300 USD</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h5 className="popup__full-cost">Итого: 8 955 USD</h5>
            <table className="popup__table">
              <tbody>
                <tr>
                  <td className="popup__name_mobile">
                    <h4>Наши услуги</h4>
                  </td>
                  <td className="popup__cost popup__cost_percent">
                    <p>1 500 USD</p>
                    <p className="popup__percent">10% от стоимости по контракту, но не менее 1 500 USD</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ) : (
          <>
            <table className="popup__table">
              <tbody>
                <tr className="popup__name_mobile">
                  <td>
                    <h4>НДС</h4>
                  </td>
                </tr>
                <tr className="popup__name_mobile">
                  <td>
                    <p>1 340 USD</p>
                  </td>
                </tr>
                <tr className="popup__name_mobile">
                  <td>
                    <h4>Сборы</h4>
                  </td>
                </tr>
                <tr className="popup__name_mobile">
                  <td>
                    <p>135 USD</p>
                  </td>
                </tr>
                <tr className="popup__name_mobile">
                  <td>
                    <h4>Банковские расходы</h4>
                  </td>
                </tr>
                <tr className="popup__name_mobile">
                  <td>
                    <p>80 USD</p>
                  </td>
                </tr>
                <tr className="popup__name_mobile">
                  <td>
                    <h4>Таможенное оформление</h4>
                  </td>
                </tr>
                <tr className="popup__name_mobile">
                  <td>
                    <p>200 USD</p>
                  </td>
                </tr>
                <tr className="popup__name_mobile">
                  <td>
                    <h4>Транспортные расходы</h4>
                  </td>
                </tr>
                <tr className="popup__name_mobile">
                  <td>
                    <p>1 300 USD</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h5 className="popup__full-cost">Итого: 8 955 USD</h5>
            <table className="popup__table">
              <tbody>
                <tr className="popup__name_mobile">
                  <td>
                    <h4>Наши услуги</h4>
                  </td>
                </tr>
                <tr className="popup__bg_mobile">
                  <td>
                    <p>1 500 USD</p>
                    <p className="popup__percent">10% от стоимости по контракту, но не менее 1 500 USD</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}

        <h5 className="popup__full-cost">Итого с нашими услугами под ключ 10 455 USD</h5>
      </div>
    </div>
  );
};

export default Table;
