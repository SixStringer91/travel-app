import { useEffect, useMemo, useState } from 'react';
import { ICurrenciesProps } from '../../../../../Interfaces';
import { CurrencyCard } from '../../../../shared';
import styles from './currencies.module.css';

const Currencies = (props: ICurrenciesProps) => {
  const { currency } = props;

  const [currenciesRates, setCurrenciesRates] = useState({
    USD: 0,
    EUR: 0,
    BYN: 0
  });

  const CurrenciesData = [
    {
      rate: currenciesRates.EUR,
      suffix: '€',
      title: 'EUR'
    },
    {
      rate: currenciesRates.USD,
      suffix: '$',
      title: 'USD'
    },
    {
      rate: currenciesRates.BYN,
      suffix: 'Br',
      title: 'BYN'
    }
  ];

  const cards = useMemo(
    () => CurrenciesData.map((card) => (
      <CurrencyCard key={card.suffix} {...card} currency={currency} />
    )),
    [CurrenciesData]
  );

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/2e582ca014e3d2a13ce26cc8/latest/${currency}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (currency !== 'KPW') {
          setCurrenciesRates({
            USD: data.conversion_rates.USD,
            EUR: data.conversion_rates.EUR,
            BYN: data.conversion_rates.BYN
          });
        } else {
          setCurrenciesRates({
            USD: 0.00111,
            EUR: 0.0029,
            BYN: 0.00093
          });
        }
      });
  }, []);

  return <div className={styles.currencyBlock}>{cards}</div>;
};

export default Currencies;
