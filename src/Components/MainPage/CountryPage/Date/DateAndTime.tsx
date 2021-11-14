import { Space, Button, Modal } from 'antd';
import { CalendarOutlined, FieldTimeOutlined } from '@ant-design/icons';
import Clock from './Time/Time';
import Date from './Date/Date';
import { regions } from '../../../../data/date.data';

interface IDateProps {
    city: string
    lang: string
}

const DateAndTime = (props: IDateProps) => {
  const { city, lang } = props;

  const curCity = city.split(' ').join('') as string;

  const reg = regions[curCity];

  const todayDate = () => {
    Modal.info({
      title: <CalendarOutlined style={{ fontSize: '3rem' }} />,
      content: <Date fontSize="4rem" lang={lang} />
    });
  };

  const todayTime = () => {
    Modal.info({
      title: <FieldTimeOutlined style={{ fontSize: '3rem' }} />,
      content: <Clock fontSize="4rem" reg={reg} />
    });
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <Space>
        <Button onClick={todayDate}>
          <Date
            fontSize="1rem"
            lang={lang}
          />

        </Button>
        <Button onClick={todayTime}><Clock fontSize="1rem" reg={reg} /></Button>
      </Space>
    </div>
  );
};

export default DateAndTime;
