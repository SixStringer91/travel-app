import { Space, Card } from 'antd';
import {
  useCallback, useEffect, useMemo, useState
} from 'react';
import Clock from './Time/Time';
import Date from './Date/Date';
import { regions } from '../../../../data/date.data';

interface IDateProps {
    city: string
    lang: string
}

const DateAndTime = (props: IDateProps) => {
  const { city, lang } = props;

  const mediaMatch = window.matchMedia('(max-width: 1317px)');
  const [matches, setMatches] = useState(mediaMatch.matches);

  const handler = useCallback(
    (e: MediaQueryListEvent) => setMatches(e.matches), []
  );

  useEffect(() => {
    mediaMatch.addEventListener('change', handler);
    return () => mediaMatch.removeEventListener('change', handler);
  });

  const curCity = useMemo(() => city.split(' ').join(''), []) as string;

  const reg = regions[curCity];

  return (
    <Space
      size="small"
      style={{ paddingTop: '0.5rem' }}
      direction={matches ? 'horizontal' : 'vertical'}
    >
      <Card
        bordered
        bodyStyle={{ padding: '0.3rem' }}
        size="small"
      >
        <Date fontSize="1rem" lang={lang} />
      </Card>
      <Card
        style={{ minWidth: '5rem', width: 'max-content' }}
        bordered
        bodyStyle={{ padding: '0.3rem', textAlign: 'center' }}
        size="small"
      >
        <Clock fontSize="1rem" reg={reg} />
      </Card>
    </Space>
  );
};

export default DateAndTime;
