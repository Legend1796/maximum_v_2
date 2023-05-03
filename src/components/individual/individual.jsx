import "./individual.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../../utils/individual-data";
import Item from "./item/item";

class Individual extends Component {
  render() {
    // const Individual = ({ pageWidth }) => {
    const settings = {
      dots: true,
      //   arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section className="individual">
        <div className="individual__container">
          <h2 className="individual__title">Инвивидуальный подход к каждой поставке</h2>
          <h4 className="individual__subtitle">Примеры доставленного оборудования</h4>
        </div>
        <Slider {...settings}>
          {data.map((company) => (
            <Item company={company} key={company.id} />
          ))}
        </Slider>
      </section>
    );
  }
}

export default Individual;
