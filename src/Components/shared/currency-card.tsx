import { Card, Row, Statistic } from 'antd';
import {
  CSSProperties, useCallback, useEffect, useState
} from 'react';

type CurrencyCardProps = {
	currency: string,
	rate: number,
	suffix: string,
	title: string

}

const styleSetter = (isSmallDisplay:boolean):CSSProperties => ({
  color: '#3f8600',
  fontSize: isSmallDisplay ? '12px' : '',
  minWidth: isSmallDisplay ? '50px' : '100px'
});

const CurrencyCard = ({
  currency,
  rate,
  suffix,
  title
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
          title={`${currency}/${title}`}
          value={rate}
          precision={4}
          valueStyle={styleSetter(matches)}
          suffix={suffix}
        />
      </Card>
    </Row>
  );
};

export default CurrencyCard;
