import { Space } from 'antd';
import {
  useCallback, useEffect, useMemo, useState
} from 'react';
import Clock from '../../../../shared/time.component';
import Date from '../../../../shared/date.component';
import { regions } from '../../../../../data/date.data';
import DateElement from '../../../../hoc/date-element.hoc';
import { LangType } from '../../../../../Interfaces';

interface IDateProps {
    city: string
    lang: LangType
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

  const DateHOC = DateElement(Date);

  const ClockHOC = DateElement(Clock);

  return (
    <Space
      size="small"
      style={{ paddingTop: '0.5rem' }}
      direction={matches ? 'horizontal' : 'vertical'}
    >
      <DateHOC fontSize="1rem" lang={lang} />
      <ClockHOC fontSize="1rem" reg={reg} />
    </Space>
  );
};

export default DateAndTime;
