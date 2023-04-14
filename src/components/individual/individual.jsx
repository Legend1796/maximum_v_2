import "./individual.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Individual = () => {
  const options = {
    loop: true,
    center: true,
    items: 1,
    margin: 0,
    dots: true,
    nav: true,
  };

  return (
    <section className="individual">
      <div className="individual__container">
        <h2 className="individual__title">Инвивидуальный подход к каждой поставке</h2>
        <h4 className="individual__subtitle">Примеры доставленного оборудования</h4>
        <OwlCarousel className="owl-theme" {...options}>
          <div class="item">
            <div className="individual__item">
              <div className="individual__column">
                <div className="individual__image"></div>
              </div>
              <div className="individual__column">
                <h2 className="individual__col-title">Невком</h2>
                <h6 className="individual__col-subtitle">Что везли?</h6>
                <p className="individual__col-text">Вальцы для прокатки листового металла</p>
                <h6 className="individual__col-subtitle">Особенности заказа</h6>
                <p className="individual__col-text">
                  Установка была значительных размеров. Размер вальцов определяется толщиной сгибаемого листа стали.
                  Требуемые вальцы гнут сталь 60мм. Если бы фальцы гнули 4-6 мм, они были бы не такие большие.
                </p>
                <h6 className="individual__col-subtitle">Результат</h6>
                <p className="individual__col-text">
                  Собрали предложения от поставщиков и выбрали оптимального по соотношению цена/качество. В процессе
                  поставки добавили в спецификацию поддерживающие утсройства и успешно импортировали оборудование.
                  Клиент остался доволен.
                </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="individual__item">
              <div className="individual__column">
                <div className="individual__image"></div>
              </div>
              <div className="individual__column">
                <h2 className="individual__col-title">Невком</h2>
                <h6 className="individual__col-subtitle">Что везли?</h6>
                <p className="individual__col-text">Вальцы для прокатки листового металла</p>
                <h6 className="individual__col-subtitle">Особенности заказа</h6>
                <p className="individual__col-text">
                  Установка была значительных размеров. Размер вальцов определяется толщиной сгибаемого листа стали.
                  Требуемые вальцы гнут сталь 60мм. Если бы фальцы гнули 4-6 мм, они были бы не такие большие.
                </p>
                <h6 className="individual__col-subtitle">Результат</h6>
                <p className="individual__col-text">
                  Собрали предложения от поставщиков и выбрали оптимального по соотношению цена/качество. В процессе
                  поставки добавили в спецификацию поддерживающие утсройства и успешно импортировали оборудование.
                  Клиент остался доволен.
                </p>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Individual;
