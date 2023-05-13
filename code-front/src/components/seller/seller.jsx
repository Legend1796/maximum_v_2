import sale from "../../images/largeImages/sale_image.svg";
import saleTablet from "../../images/largeImages/sale_image_tablet.svg";
import saleMobile from "../../images/largeImages/sale_image_mobile.svg";
import Form from "../form/form";
import "./seller.css";

const Seller = ({ pageWidth }) => {
  return (
    <section className="seller">
      <div className="seller__container">
        <div className="seller__column_one">
          <h2 className="seller__title">ВАША ЭКОНОМИЯ ОКОЛО 40%</h2>
          <h5 className="seller__subtitle">На основе внутреннего анализа всех поставок за прошедшие 3 года</h5>
          <p className="seller__text">
            Вы получите максимальное количество коммерческих предложений зарубежных производителей необходимого вам
            оборудования или материалов
          </p>
          {pageWidth > 959 ? (
            <>
              <img src={pageWidth > 1439 ? sale : saleTablet} alt="sale_image" className="seller__sale_image" />
              <div className="seller__text_absolute-container">
                <p className="seller__text_absolute">С ценами от поставщика без накрутки</p>
                <p className="seller__text_absolute">С условными индексами надежности</p>
                <p className="seller__text_absolute">С лучшими условиями оплаты и сроков производства</p>
              </div>
            </>
          ) : (
            <>
              <p className="seller__par">С ценами от поставщика без накрутки</p>
              <p className="seller__par seller__par_m">С условными индексами надежности</p>
              <img src={saleMobile} alt="sale_image" className="seller__sale_image" />
              <p className="seller__par">С лучшими условиями оплаты и сроков производства</p>
            </>
          )}
        </div>
        <div className="seller__column" id="form-seller">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Seller;