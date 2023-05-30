import "./feedback.css";
const Feedback = () => {
  return (
    <section className="feedback">
      <div className="feedback__container">
        <h2 className="feedback__title">Убедитесь в прозрачности и честности поставки</h2>
        <h5 className="feedback__subtitle">
          Для каждой поставки мы создаем <span className="feedback__span">чат WhatsApp</span>, в котором находитесь вы,
          ваш персональный менеджер и поставщик оборудования. В данном чате вы сможете оперативно уточнить любую
          информацию, а также следить за переговорами, условиями и ходом поставки.
        </h5>
      </div>
    </section>
  );
};

export default Feedback;
