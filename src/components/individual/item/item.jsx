import "../individual.css";

const Item = ({ company }) => {
  return (
    <div className="individual__item">
      <div className="individual__column">
        <div className="individual__image"></div>
      </div>
      <div className="individual__column">
        <h2 className="individual__col-title">{company.title}</h2>
        <h6 className="individual__col-subtitle">Что везли?</h6>
        <p className="individual__col-text">{company.firstText}</p>
        <h6 className="individual__col-subtitle">Особенности заказа</h6>
        <p className="individual__col-text">{company.secondText}</p>
        <h6 className="individual__col-subtitle">Результат</h6>
        <p className="individual__col-text">{company.thirdText}</p>
      </div>
    </div>
  );
};

export default Item;
