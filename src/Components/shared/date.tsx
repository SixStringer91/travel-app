import { useEffect, useState } from 'react';
import { dateGeneral } from '../../data/date.data';
import { LangType } from '../../Interfaces';

interface IDateProps {
  lang: LangType;
  fontSize: string;
}

type DateState = {
	weekDay: string;
	day: number;
	month: string;
}

const initialState:DateState = {
  weekDay: '-',
  day: 1,
  month: '-'
};

const datePropsCreator = (lang: LangType) => {
  const newState = {} as DateState;

  const weekdays = [...dateGeneral[lang].days];
  const months = [...dateGeneral[lang].month];

  const dt = new window.Date();
  const currentDayNumber = dt.getDate();
  const currentMonthNumber = dt.getMonth();
  const currentDayOfWeekNumber = dt.getDay() - 1;

  newState.day = currentDayNumber;
  newState.month = lang === 'en'
    ? ` of ${months[currentMonthNumber]}`
    : ` ${months[currentMonthNumber]}`;
  newState.weekDay = ` ${weekdays[currentDayOfWeekNumber]}`;

  return newState;
};

const Date = ({ lang, fontSize }: IDateProps) => {
  const [{ day, month, weekDay }, setState] = useState<DateState>(initialState);

  useEffect(() => {
    setState(datePropsCreator(lang));
  }, [lang]);

  return (
    <>
      <div style={{ fontSize }}>
        {day}
        {month}
        {weekDay}
      </div>
    </>
  );
};

export default Date;
