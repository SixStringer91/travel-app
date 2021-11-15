import { useEffect, useState } from 'react';
import { daysObj, monthsObj } from '../../../../../data/date.data';

interface IDateProps {
    lang: string;
    fontSize: string
}

const Date = (props: IDateProps) => {
  const { lang, fontSize } = props;

  const [weekDay, setWeekDay] = useState('-');
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState('-');

  const [weekdays, setWeekDays] = useState(daysObj.ENG);
  const [months, setMonths] = useState(monthsObj.ENG);

  useEffect(() => {
    if (lang === 'ru') {
      setWeekDays(daysObj.RU);
      setMonths(monthsObj.RU);
    } else if (lang === 'en') {
      setWeekDays(daysObj.ENG);
      setMonths(monthsObj.ENG);
    } else {
      setWeekDays(daysObj.BY);
      setMonths(monthsObj.BY);
    }

    const dt = new window.Date();
    const currentDayNumber = dt.getDate();
    const currentMonthNumber = dt.getMonth();
    const currentDayOfWeekNumber = dt.getDay() - 1;

    setDay(currentDayNumber);
    if (lang === 'en') setMonth(` of ${months[currentMonthNumber]}`);
    else setMonth(` ${months[currentMonthNumber]}`);
    setWeekDay(` ${weekdays[currentDayOfWeekNumber]}`);
  }, [weekdays, months, lang]);

  return (
    <>
      <div style={{ fontSize: `${fontSize}` }}>
        {day}
        {month}
        {weekDay}
      </div>
    </>
  );
};

export default Date;
