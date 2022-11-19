import React from 'react';


import line from '../../images/companyServices/line.svg'
import car from '../../images/companyServices/car.svg'


const CompanyServices = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services__header">
          <h1 className="services__title">
            Все <span>услуги</span> нашей компании
          </h1>
          <h4 className="services__subtitle">
            Выберите услугу, которая нужна вам и оставьте заявку
          </h4>
        </div>
        <div className="services__blog">
            <form className="services__form" action="">
                <div className="services__form-top">Выберите подходящий для вас вариант заключения сделки:</div>
                <ul className="services__list">
                    <li className="services__item">
                      <input className="services__checkbox" type="checkbox" />
                      <h4 className="services__form-title">Продажа</h4>
                      <p className="services__form-description">Вам нужно срочно продать свой автомобиль</p>
                    </li>

                    <li className="services__item">
                      <input className="services__checkbox" type="checkbox" />
                      <h4 className="services__form-title">Обмен</h4>
                      <p className="services__form-description">Решили поменять автомобиль, но не хотите доплачивать?Этот вариант специально для вас</p>
                    </li>

                    <li className="services__item">
                      <input className="services__checkbox" type="checkbox" />
                      <h4 className="services__form-title">Trade-in</h4>
                      <p className="services__form-description">Это услуга по приему вашего автомобиля в счет покупки нового, цена которого уменьшается на стоимость вашего</p>
                    </li>

                    <li className="services__item">
                      <input className="services__checkbox" type="checkbox" />
                      <h4 className="services__form-title">Подбор автомобиля</h4>
                      <p className="services__form-description">Слабо разбираетесь в устройстве автомобиля и способах его проверки или же просто нет на это времени? Мы подберем авто для вас</p>
                    </li>
                </ul>
                <button className='services__button'>Далее</button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default CompanyServices;
