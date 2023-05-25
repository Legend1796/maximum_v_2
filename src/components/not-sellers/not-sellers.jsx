import china from "../../images/not-sellers/china.svg";
import analyze from "../../images/not-sellers/analyze.svg";
import pig from "../../images/not-sellers/pig.svg";
import zip from "../../images/not-sellers/zip.svg";
import "./not-sellers.css";

const NotSellers = () => {
  return (
    <section className="not-sellers">
      <h2 className="not-sellers__title">Мы - не продавцы оборудования</h2>
      <h5 className="not-sellers__subtitle">
        Мы - ваша правая рука в импорте необходимого оборудования и оказываем качественный сервис
      </h5>
      <ul className="not-sellers__cards">
        <li className="not-sellers__card">
          <img src={china} alt="china" className="not-sellers__photo" />
          <h4 className="not-sellers__card-title">Лучшее предложение из Китая</h4>
          <p className="not-sellers__card-text">
            Мы знаем как общаться и строить бизнес с Китаем, благодаря чему вы получите лучшие цены и условия от
            поставщика
          </p>
        </li>
        <li className="not-sellers__card">
          <img src={analyze} alt="analyze" className="not-sellers__photo" />
          <h4 className="not-sellers__card-title">Надежные поставщики</h4>
          <p className="not-sellers__card-text">
            Мы проведем первоначальный или глубокий анализ надежности выбранного поставщика
          </p>
        </li>
        <li className="not-sellers__card">
          <img src={zip} alt="zip" className="not-sellers__photo" />
          <h4 className="not-sellers__card-title">Образцы</h4>
          <p className="not-sellers__card-text">
            При необходимости заказываем образцы товаров или помогаем в предоставлении образцов зарубежному
            производителю
          </p>
        </li>
        <li className="not-sellers__card">
          <img src={pig} alt="pig" className="not-sellers__photo" />
          <h4 className="not-sellers__card-title">Экономия</h4>
          <p className="not-sellers__card-text">
            Учтем все нюансы таможенного оформления и поможем сэкономить за счет законной оптимизации таможенных
            платежей
          </p>
        </li>
      </ul>
    </section>
  );
};

export default NotSellers;
