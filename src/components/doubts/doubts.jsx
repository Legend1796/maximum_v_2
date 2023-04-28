import "./doubts.css";
import Button from "../ui/button";
import Form from "../form/form";
import doubts from "../../images/largeImages/question_image.svg";
import doubtsMobile from "../../images/largeImages/question_image_mobile.svg";

const Doubts = ({ pageWidth }) => {
  return (
    <>
      <section className="doubts__header">
        <h2 className="doubts__header-title doubts-title__header-title">Вы станете нашим постоянным клиентом. 100%</h2>
        <h5 className="doubts__header-subtitle">
          Мы не бросаем клиентов после поставки и при возникновении каких-то вопросов мы способствуем их решению с
          поставщиком или производителем
        </h5>
        <div className="doubts-bottom__container">
          <Button type="button" typeButton="primary">
            <p>Оставить заявку</p>
          </Button>
        </div>
      </section>
      <section className="doubts">
        <div className="doubts__container">
          <div className="doubts__column">
            <h2 className="doubts__header-title">ОСТАЛИСЬ СОМНЕНИЯ?</h2>
            {pageWidth > 959 ? (
              <>
                <img src={pageWidth > 959 ? doubts : doubtsMobile} alt="question_image" className="doubts__image" />
                <p className="doubts__absolute-text">Готовы предоставить честные рекомендации наших клиентов</p>
                <p className="doubts__absolute-text">
                  У вас есть возможность посетить предприятия, на которые мы уже осуществляли поставки аналогичного
                  оборудования
                </p>
                <p className="doubts__absolute-text">
                  Если у вас нет возможности посетить их лично, мы готовы предоставить вам контакты Заказчиков, у
                  которых вы сможете уточнить интересующие вопросы по телефону
                </p>
              </>
            ) : (
              <>
                <p className="doubts__absolute-text">Готовы предоставить честные рекомендации наших клиентов</p>
                <p className="doubts__absolute-text">
                  У вас есть возможность посетить предприятия, на которые мы уже осуществляли поставки аналогичного
                  оборудования
                </p>
                <img src={pageWidth > 959 ? doubts : doubtsMobile} alt="question_image" className="doubts__image" />
                <p className="doubts__absolute-text">
                  Если у вас нет возможности посетить их лично, мы готовы предоставить вам контакты Заказчиков, у
                  которых вы сможете уточнить интересующие вопросы по телефону
                </p>
              </>
            )}
          </div>
          <div className="doubts__column">
            <Form />
          </div>
        </div>
      </section>
    </>
  );
};

export default Doubts;
