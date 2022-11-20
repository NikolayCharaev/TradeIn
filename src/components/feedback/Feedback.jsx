import React from 'react'
import {Button, ButtonWhite} from '../button/Button'

const Feedback = () => {
  return (
    <section className="feedback">
        <div className="container">
            <div className="feedback__inner">
                <div className="feedback__content">
                    <div className="feedback__phone-left"></div>
                    <h1 className="feedback__title">Напишите нам <br /> в WhatsApp или Telegram</h1>
                    <p className="feedback__description">и мы назовем предварительную стоимость автомобиля</p>
                    <div className="feedback__buttons">
                        <Button name='Написать в WhatsApp'/>
                        <ButtonWhite name='Написать в Telegram'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Feedback
