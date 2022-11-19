import React, {useState} from 'react'
import TermsContent from './TermsContent'

const Terms = () => {
  const [counter,setCounter] = useState(1)
  function hanldeClass (e) {
    
  }

  

  return (
    <div className='terms'>
        <div className="container">
            <div className="terms__inner">
                <div className="terms__top">
                    <button className={counter === 1 ? 'terms__button active' : 'terms__button'} onClick={() => {setCounter(1)}}>Почему мы?</button>
                    <button className={counter === 2 ? 'terms__button active' : 'terms__button'} onClick={() => setCounter(2)}>Как мы работаем</button>
                    <button className={counter === 3 ? 'terms__button active' : 'terms__button'}  onClick={() => setCounter(3)}>Этапы заключения сделки</button>
                    <button className={counter === 4 ? 'terms__button active' : 'terms__button'}  onClick={() => setCounter(4)}>Пакет документов</button>
                </div>
                <TermsContent counter={counter}/>
            </div>
        </div>
    </div>
  )
}

export default Terms
