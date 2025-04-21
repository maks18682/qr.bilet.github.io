import './App.css';
import krestImg from './img/krestImg.png';
import busImg from './img/bus.jpeg';
import razImg from './img/raz.jpeg';
import qrImg from './img/qr.jpeg';
import qrTwoImg from './img/qrTwo.jpeg';
import ActiveHeader from './Components/ActiveHeader';
import rubImg from './img/rub.jpeg';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(166)
  const openClick = () => {
    setOpen(res => (res === 166 ? 117 : 166))
  }
  return (
    <>
    <header><img className='krestImg' src={krestImg} alt="Описание изображения"/><ActiveHeader /></header>
    <main>
      <img className='busImg' style={{width:'10%'}} src={busImg} alt='Автобус'/>
      <div className='T'>Транспорт</div>
      <div className='MT'>Местный транспорт</div>
      <div className='Rub'>- 102 ₽</div>
      <img className='busImg' style={{marginTop:'6%', marginBottom:'1.4%'}} src={razImg} alt='Автобус'/>
      <div className='rezText'>Разделить</div>
    </main>
    <footer>
      <div className='fooBlock'>
        <div className='columIteam'>
          <div className='DCH'>Добавьте чек</div>
          <div className='listBuy'>Чтобы здесь был список покупок</div>
        </div>
        <div className='rowIteam'>
      <img style={{width:'45.5%', marginTop:'14.2%', marginLeft:'35.5%' }} src={qrImg} alt='Автобус'/>
        </div>
      </div>
      <div className='fooEnd'>
        <div className='OneBlock'>
          <div className='OneBuy'>Платеж со счета</div>
          <div className='TwoBuy'>
            <div className='TextTwoBuy'>Black</div>
            <img className='ImgEndOne' src={qrTwoImg} alt='Автобус'/>
          </div>
        </div>
        <div className='TwoBlock'>
          <div className='TextTwoBlock'>Документы</div>
          <img className='ImgRub' src={rubImg} alt='Автобус'/>
        </div>
      </div>
      <div className='resultRow'>
        Реквизиты
      </div>
      <div className='resultRowTwo'>
        Назначение
      </div>
      <div className='resultRowThree' onDoubleClick={openClick}>
        Маршрут {open} Билет на 1 поездку (Березовский ГО) Без НДС
      </div>
    </footer>
    </>
  );
}

export default App;
