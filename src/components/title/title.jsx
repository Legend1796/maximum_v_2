import "./title.css";

const Title = () => {
  return (
    <section className="title">
      <div className="title__container">
        <h3 className="title__subtitle">Организуем под ключ закупку любого</h3>
        <h1 className="title__title">промышленного оборудования</h1>
        <h5 className="title__countries">Китай / Тайвань / Южная Корея</h5>
        <div className="title__sale">
          <p className="title__sale-text">за 10% от себестоимости контракта</p>
        </div>
      </div>
    </section>
  );
};

export default Title;
