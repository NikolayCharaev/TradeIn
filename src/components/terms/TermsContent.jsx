import React, { useState, useEffect } from 'react';

import whyOne from '../../images/terms/whyAreWe/1.svg';
import whyTwo from '../../images/terms/whyAreWe/2.svg';
import whyThree from '../../images/terms/whyAreWe/3.svg';
import whyFour from '../../images/terms/whyAreWe/4.svg';

import working from '../../images/terms/areWorking/are-working1.svg';

import package1 from '../../images/terms/packageDocuments/1.svg';
import package2 from '../../images/terms/packageDocuments/2.svg';

const allBenefits = {
  whyAreMe: [
    {
      image: whyOne,
      title: 'Быстро',
      textContent: 'Наш оценщик может приехать в течение 30 минут',
    },
    {
      image: whyTwo,
      title: 'Выгодно',
      textContent: 'Честная оценка авто и предложение максимально выгодной цены',
    },
    {
      image: whyThree,
      title: 'Безопасно',
      textContent: 'Быстрое и прозрачное оформление сделки',
    },
    {
      image: whyFour,
      title: 'Рассматриваем все предложения',
      textContent:
        'Без ограничений по состоянию транспортного средства( с плохими отчетами Автотеки и ПроАвто)',
    },
  ],
  areWorking: [
    {
      image: working,
      title: 'Прозрачность сделки',
      textContent: 'Услуги оказываются в полном соответствии с законодательством РФ',
    },
    {
      image: working,
      title: 'Высокая цена',
      textContent: 'Мы готовы выплатить за транспортное средство до 95-98% его рыночной стоимости',
    },
    {
      image: working,
      title: 'Оперативность',
      textContent:
        'Уже через 2-3 часа с момента обращения к нам, выкуп авто будет успешно завершен',
    },
    {
      image: working,
      title: 'Мгновенная выплата оговоренной суммы ',
      textContent: 'Деньги вы получите сразу после завершения процедуры',
    },
  ],
  makeDeal: [
    {
      title: 'Вы звоните или оставляете заявку',
      text: 'И примерно через полчаса специалист прибывает на место',
    },
    {
      title: 'Производится осмотр и оценка',
      text: 'Наша оценка автомобиля  это визуальный осмотр за 10 минут',
    },
    {
      title: 'Оформление документов',
    },
    {
      title: 'Вы получаете договор и деньги',
    },
  ],
  packageDocuments: [
    {
      image: package1,
      title: 'Паспорт гражданина РФ',
      textContent: 'Владельца транспортного средства',
    },
    {
      image: package2,
      title: 'СТС',
    },
    {
      image: package2,
      title: 'Паспорт транспортного средства',
    },
  ],
};

const TermsContent = (props) => {
  const { whyAreMe, areWorking, packageDocuments } = allBenefits;
  return (
    <div className="terms__content">
      {props.counter === 1
        ? whyAreMe.map((item, index) => {
            return (
              <div className="terms__card" key={index}>
                <img className="terms__image" src={item.image} alt="" />
                <div className="terms__card-content">
                  <h3 className="terms__title">{item.title}</h3>
                  <p className="terms__text">{item.textContent}</p>
                </div>
              </div>
            );
          })
        : null}
      {props.counter === 2
        ? areWorking.map((item, index) => {
            return (
              <div className="terms__card" key={index}>
                <img className="terms__image" src={item.image} alt="" />
                <div className="terms__card-content">
                  <h3 className="terms__title">{item.title}</h3>
                  <p className="terms__text">{item.textContent}</p>
                </div>
              </div>
            );
          })
        : null}
      {props.counter === 3
        ? areWorking.map((item, index) => {
            return (
              <div className="terms__card" key={index}>
                <p className="terms__image-counter">{index + 1}</p>
                <div className="terms__card-content">
                  <h3 className="terms__title">{item.title}</h3>
                  <p className="terms__text">{item.textContent ? item.textContent : null}</p>
                </div>
              </div>
            );
          })
        : null}
      {props.counter === 4
        ? packageDocuments.map((item, index) => {
            return (
              <div className="terms__card" key={index}>
                <img className="terms__image" src={item.image} alt="" />
                <div className="terms__card-content">
                  <h3 className="terms__title">{item.title}</h3>
                  <p className="terms__text">{item.textContent ? item.textContent : null}</p>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default TermsContent;
