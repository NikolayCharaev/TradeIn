import React from 'react'
import {Button, ButtonWhite} from '../button/Button'

import letter from '../../images/letter.png'

const Guarantees = () => {
  return (
    <section className="garantees">
        <div className="container">
            <div className="garantees__inner">
                <div className="garantees__right">
                    <img src={letter} alt="" className='garantees__img'/>
                    <p className="garantees__img-text">Наш договор составлен <br /> с учетом всех юридический требований</p>
                </div>
                <div className="garantees__left">
                    <h1 className="garantees__title">Гарантируем юридическую чистоту сделки</h1>
                    <p className="garantees__subtitle">Изучили закон от А до Я и проводим только безопасные и прозрачные сделки</p>
                    <ButtonWhite name='Скачать образец'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Guarantees
