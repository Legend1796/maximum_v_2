import wa from "../../images/icons/wa.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__two-column">
          <div className="footer__column">
            <h2 className="footer__title">КОНТАКТЫ</h2>
            <p className="footer__text">
              192148, Россия, г. Санкт-Петербург, ул. Ольги Берггольц, д.36, стр. 2, офис 1
            </p>
            <h5 className="footer__number">+7 812 200 46 43</h5>
            <h5 className="footer__email">mail@mail.ru</h5>
            <a href="https://wa.me/79995241046" className="footer__link" target="_blank" rel="noreferrer">
              <img src={wa} alt="watsApp" className="footer__image" />
            </a>
            <p className="footer__text">ООО “Максимум” ИНН 7811751233 ОГРН 1207800123200</p>
          </div>
          <div className="footer__column">
            <div className="footer__block"></div>
          </div>
        </div>
      </div>
      <div className="footer__copyright-container">
        <p className="footer__copyright">
          © 2015- 2023 ООО «Максимум» — Организация импорта для промышленных предприятий
        </p>
        <p className="footer__copyright">
          Сайт носит исключительно информационный характер и никакая информация, опубликованная на нём, ни при каких
          условиях не является публичной офертой, определяемой положениями пункта 2 статьи 437 Гражданского кодекса
          Российской Федерации. Для получения подробной информации о реализуемых работах и услугах и их цене необходимо
          обращаться к менеджеру компании по контактам, указанным на сайте. Оставляя свои контактные данные на этом
          сайте, вы даете согласие на обработку своих персональных данных и соглашаетесь с политикой конфиденциальности
        </p>
      </div>
    </footer>
  );
};

export default Footer;
