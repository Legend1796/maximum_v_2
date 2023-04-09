import React from "react";
import "./variants.css";

const Variants = () => {
  return (
    <section className="variants">
      <div className="variants__container">
        <h2 className="variants__title">ВАРИАНТЫ СОТРУДНИЧЕСТВА</h2>
        <div className="variants__cards">
          <div className="variants__card">
            <h4 className="variants__card-title">Импорт оборудования на свою организацию</h4>
            <p className="variants__card-text">
              Контракт заключается от вашего лица и вы становитесь полноценным участником ВЭД.
            </p>
            <p className="variants__card-text">Всю работу по организации импорта мы берем на себя. </p>
            <p className="variants__card-text">Более низкая комиссия</p>
            <h4 className="variants__card-title">15% от стоимости по контракту</h4>
          </div>
          <div className="variants__card">
            <h4 className="variants__card-title">Покупка оборудования под наш контракт</h4>
            <p className="variants__card-text">
              Берем на себя все обязанности и ответственность по осуществлению импорта на свою компанию
            </p>
            <p className="variants__card-text">
              Поставленный товар освобожден от ответственности перед органами валютного, таможенного и налогового
              контроля, связанного с импортом
            </p>
            <p className="variants__card-text">
              Вы покупаете товар по безналичному расчету за рубли у ООО “Максимум” и получаете его на оптимальных
              заранее обговоренных условиях
            </p>
            <p className="variants__card-text">Более высокая комиссия</p>
            <h4 className="variants__card-title">15% от стоимости по контракту</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Variants;
