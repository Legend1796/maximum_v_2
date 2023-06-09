import { useSelector } from "react-redux";
import yourself from "../../images/largeImages/yourself_image.svg";
import yourselfTablet from "../../images/largeImages/yourself_image_tablet.svg";
import yourselfMobile from "../../images/largeImages/yourself_image_mobile.svg";
import Form from "../form/form";
import "./found.css";

const Found = ({ setIsLoading }) => {
  const pageWidth = useSelector((state) => state.width.pageWidth);
  return (
    <section className="found">
      <h2 className="found__title">Уже нашли оборудование самостоятельно?</h2>
      <div className="found__container">
        <div className="found__column">
          <Form setIsLoading={setIsLoading} />
        </div>
        <div className="found__column_one">
          {pageWidth > 959 ? (
            <>
              <img
                src={pageWidth > 1439 ? yourself : yourselfTablet}
                alt="yourself_image"
                className="found__yourself_image"
              />
              <div className="found__absolute">
                <h6 className="found__absolute-title">Проведем оценку выбранного поставщика</h6>
                <p className="found__absolute-text">и подскажем, где вас могли обмануть</p>
              </div>
              <div className="found__absolute">
                <h6 className="found__absolute-title">Сделаем срочный просчет</h6>
                <p className="found__absolute-text">
                  себестоимости импорта данной партии товара на основе коммерческих документов (invoice или packing
                  list)
                </p>
              </div>
              <div className="found__absolute">
                <h6 className="found__absolute-title">Проанализируем рынок и соберем предложения</h6>
                <p className="found__absolute-text">
                  на аналогичные материалы или оборудование от других производителей, чтобы вы смогли выбрать лучшие
                  условия
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="found__absolute">
                <h6 className="found__absolute-title">Проведем оценку выбранного поставщика</h6>
                <p className="found__absolute-text">и подскажем, где вас могли обмануть</p>
              </div>
              <div className="found__absolute">
                <h6 className="found__absolute-title">Сделаем срочный просчет</h6>
                <p className="found__absolute-text">
                  себестоимости импорта данной партии товара на основе коммерческих документов (invoice или packing
                  list)
                </p>
              </div>
              <img src={yourselfMobile} alt="found__yourself_image" className="found__yourself_image" />
              <div className="found__absolute">
                <h6 className="found__absolute-title">Проанализируем рынок и соберем предложения</h6>
                <p className="found__absolute-text">
                  на аналогичные материалы или оборудование от других производителей, чтобы вы смогли выбрать лучшие
                  условия
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Found;
