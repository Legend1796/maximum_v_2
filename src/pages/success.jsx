import "./anotherPages.css";
import { NavLink } from "react-router-dom";

const Success = () => {
  return (
    <section className="send">
      <div className="send__container">
        <h3 className="notfound__title notfound__title_send">Спасибо за заявку</h3>
        <p className="send__text">Мы с Вами свяжемся в ближайшее время</p>
        <button className="notfound__button notfound__button_send" type="button">
          <NavLink className="notfound__button" to="/">
            <p className="notfound__button-text">Вернуться на главную</p>
          </NavLink>
        </button>
      </div>
    </section>
  );
};

export default Success;
