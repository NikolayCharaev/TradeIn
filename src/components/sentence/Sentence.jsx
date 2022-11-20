import React from 'react';
import {Button} from '../button/Button';
import car from '../../images/sentence-big.jpg'

const Sentence = () => {
  return (
    <section className="sentence">
      <div className="container">
        <div className="sentence__inner">
          <div className="sentence__content">
            <h1 className="sentence__title"><span>Продайте</span> или <span>обменяйте</span> ваш Автомобиль уже сегодня</h1>
            <Button name="Оценить стоимость" />
          </div>
          <div className="sentence__image">
            <img src={car} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sentence;
