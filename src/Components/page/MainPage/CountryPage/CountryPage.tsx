import React, { useState } from 'react';
import { FullscreenOutlined } from '@ant-design/icons';
import css from './CountryPage.module.css';
import Currencies from './Currencies/Currencies';
import Weather from './Weather/weather.component';
import Gallery from './Gallery/Gallery';
import Video from './Video/video.component';
import DateAndTime from './Date/DateAndTime';
import Preloader from '../../../shared/preloader.component';
import { ICountry, IDetails, LangType } from '../../../../Interfaces';
import WorldMap from './world-map/world-map.component';

type CountryPageT = {
  link: string;
  lang: LangType;
  country: ICountry | null | undefined;
  setSearchIsDisabled: () => void;
  fetchDetails: (name: string) => void;
  fetchDetailsWithoutState: (link: string) => void;
  fetchDeleteDetails: () => void;
  countryDetails: IDetails;
  loading: boolean;
};

const CountryPage = ({
  link,
  lang,
  country,
  setSearchIsDisabled,
  fetchDetails,
  fetchDetailsWithoutState,
  fetchDeleteDetails,
  countryDetails,
  loading
}: CountryPageT) => {
  const [isFullScreen, setIsFullScreen] = useState(true);

  const mapHandleClick = () => setIsFullScreen((prev) => !prev);

  React.useEffect(() => {
    setSearchIsDisabled();
    if (country) fetchDetails(country.nameEN);
    else fetchDetailsWithoutState(link);
    return () => {
      fetchDeleteDetails();
    };
  }, []);

  return (
    <div className={css.wrapper}>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <div className={css.upperContent}>
            <div className={css.leftBlock}>
              <button
                type="button"
                className={css.button}
                onClick={mapHandleClick}
              >
                <FullscreenOutlined />
              </button>
              <WorldMap
                toggleFullscreen={mapHandleClick}
                nameEN={country!.nameEN}
                isFullscreen={isFullScreen}
                capital={country!.capital}
              />

              <DateAndTime city={country!.capital.en} lang={lang} />
            </div>

            <div className={css.gallery}>
              <Gallery lang={lang} views={countryDetails.views} />
            </div>
            <div className={css.rightBlock}>
              <Weather capital={country!.capital.en} />
              <Currencies currency={country!.currencyCode} />
            </div>
          </div>
          <div className={css.bottomBlock}>
            <div className={css.video}>
              <Video url={countryDetails.videoURL} />
            </div>
            <div className={css.info}>
              <span>{countryDetails.info[lang]}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CountryPage;
