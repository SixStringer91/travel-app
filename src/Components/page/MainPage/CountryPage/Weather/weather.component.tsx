import { Card } from 'antd';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import styles from './weather.module.css';
import { AppThunkDispatch, RootState } from '../../../../../redux/Store';
import { Thunks } from '../../../../../redux/action-creators/thunks';
import { IWeatherStore } from '../../../../../Interfaces';
import { AC } from '../../../../../redux/action-creators/action-creators';
import { colorStyler, classSelector } from '../../../../../lib/utils';

interface IWeather {
	params: IWeatherStore | null;
  lang: string;
  capital: string;
  getWeather: (lang: string, capital: string) => void,
  removeWeatherParams: () => void
}

const Weather = ({
  params, lang, capital, getWeather, removeWeatherParams
}: IWeather) => {
  useEffect(() => {
    getWeather(lang, capital);
    return () => removeWeatherParams();
  }, []);

  return (
    <Card
      className={styles.cardStyle}
      loading={Boolean(!params)}
      cover={(
        <div className={styles.picWrapper}>
          <i
            className={classSelector(params, styles)}
            style={colorStyler(params)}
          />
        </div>
      )}
    >

      <Card.Meta
        title={params?.description}
        description={`${params?.temp} °C`}
      />
    </Card>
  );
};

const mapState = ({
  weather: { params },
  language: { lang }
}: RootState,
{ capital }:{capital: string}) => ({
  params,
  lang,
  capital
});

const mapDispatch = (dispatch: AppThunkDispatch) => ({
  getWeather: (lang: string, capital: string) => {
    dispatch(Thunks.getWeather(lang, capital));
  },
  removeWeatherParams: () => {
    dispatch(AC.setWeather(null));
  }
});

export default connect(mapState, mapDispatch)(Weather);
