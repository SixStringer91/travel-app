import React, { useEffect, useState } from "react";
import { Col, Statistic } from "antd";
import { CalendarOutlined, SmileOutlined } from "@ant-design/icons";
import { daysObj, monthsObj } from "../DataForDateAndTime";

interface IDateProps {
    reg: string;
    lang: string;
}

const Date = (props: IDateProps): JSX.Element => {

    const { reg, lang } = props;

    const [weekDay, setWeekDay] = useState('-');
    const [day, setDay] = useState(1);
    const [month, setMonth] = useState('-');

    const [weekdays, setWeekDays]: any = useState(daysObj.ENG);
    const [months, setMonths]: any = useState(monthsObj.ENG);

    useEffect(() => {

        if(lang === 'ru') {
            setWeekDays(daysObj.RU);
            setMonths(monthsObj.RU);
        } else if (lang === 'en') {
            setWeekDays(daysObj.ENG);
            setMonths(monthsObj.ENG);
        } else {
            setWeekDays(daysObj.BY);
            setMonths(monthsObj.BY);
        }

        const dt = new window.Date().toLocaleString("en-US", { timeZone: `${reg}` });

        const currentDayNumber: any = dt.slice(2, 4);
        const currentMonthNumber: any = dt[0];
        const currentDayOfWeekNumber: number = (new window.Date()).getDay() - 1;

        setDay(currentDayNumber);
        lang === 'en'
            ? setMonth(`of ${months[currentMonthNumber]}`)
            : setMonth(months[currentMonthNumber]);
        setWeekDay(weekdays[currentDayOfWeekNumber]);
    }, [weekdays, months, lang]);

    return <>
        <Col span={4}>
            <Statistic title="Date" value={`${day} ${month}`}
                       prefix={<CalendarOutlined/>}/>
        </Col>
        <Col span={4}>
            <Statistic title="Day" value={weekDay} prefix={<SmileOutlined/>}/>
        </Col>
    </>;
};

export default Date;