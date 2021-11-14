import { Card, Row, Statistic } from 'antd';
import {
  CSSProperties, useCallback, useEffect, useState
} from 'react';
import styles from './currencies.module.css';

type CurrencyCardProps = {
	currency: string,
	rate: number,
	suffix: string

}

const valueStyle = {
  container: (isRowBased:boolean):CSSProperties => ({
    color: '#3f8600',
    fontSize: isRowBased ? '15px' : ''
  })
};

const CurrencyCard = ({
  currency,
  rate,
  suffix
}:CurrencyCardProps) => {
  const mediaMatch = window.matchMedia('(max-width: 500px)');
  const [matches, setMatches] = useState(mediaMatch.matches);

  const handler = useCallback(
    (e: MediaQueryListEvent) => setMatches(e.matches), []
  );

  useEffect(() => {
    mediaMatch.addEventListener('change', handler);
    return () => mediaMatch.removeEventListener('change', handler);
  });

  return (
    <Row>
      <Card size="small">
        <Statistic
          title={`${currency}/EUR`}
          className={styles.currencyValue}
          value={rate}
          precision={4}
          valueStyle={valueStyle.container(matches)}
          suffix={suffix}
        />
      </Card>
    </Row>
  );
};

export default CurrencyCard;
