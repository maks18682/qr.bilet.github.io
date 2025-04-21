import { useState } from "react";
import './style.css';

export default function ActiveHeader() {
    const [showDate, setShowDate] = useState(false);
  
    const handleClick = () => {
      setShowDate(true);
    };
  
    const formatDate = () => {
      const now = new Date();
      const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
      let formattedDate = now.toLocaleString('ru-RU', options);
      // Убираем "г."
      formattedDate = formattedDate.replace('г.', '');
      // Убираем лишние пробелы перед запятой и заменяем " в " на ", "
      formattedDate = formattedDate.replace(/\s+/g, ' ').trim(); // убираем лишние пробелы
      formattedDate = formattedDate.replace(' в ', ', ');
      // Теперь удаляем пробел перед запятой после года
      formattedDate = formattedDate.replace(/(\d{4})\s+,/, '$1,');
      return formattedDate;
    };
  
    return (
      <div>
        {!showDate ? (
          <button className="button" onClick={handleClick}>Дата</button>
        ) : (
          <div className="date">{formatDate()}</div>
        )}
      </div>
    );
  };
  
  