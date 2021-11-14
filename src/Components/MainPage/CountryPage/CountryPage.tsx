import React, { useState } from 'react';
import { FullscreenOutlined } from '@ant-design/icons';
import css from './CountryPage.module.css';
import SmallScreenMap from './Map/SmallMap/SmallScreenMap';
import FullScreenMap from './Map/BigMap/FullScreenMap';
import Currencies from './Currencies/Currencies';
import Weather from './Weather/Weather';
import Gallery from './Gallery/Gallery';
import Video from './Video/Video';
import DateAndTime from './Date/DateAndTime';
import Preloader from '../Preloader/Preloader';

const CountryPage = ({
  link, lang,
  country, setSearchIsDisabled,
  fetchDetails, fetchDetailsWithoutState,
  fetchDeleteDetails, countryDetails,
  loading
}: any) => {
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
      {!loading
        ? (
          <>
            <div className={css.upperContent}>
              <div className={css.leftBlock}>
                <button type="button" className={css.button} onClick={mapHandleClick}>
                  <FullscreenOutlined />
                </button>
                {isFullScreen
                  ? (
                    <SmallScreenMap
                      countryCapital={country.capital[lang]}
                      countryName={country.nameEN}
                      mapCoords={countryDetails.mapCoords}
                    />
                  )
                  : (
                    <FullScreenMap
                      countryCapital={country.capital[lang]}
                      countryName={country.nameEN}
                      mapCoords={countryDetails.mapCoords}
                      mapHandleClick={mapHandleClick}
                    />
                  )}

                <DateAndTime city={country.capital.en} lang={lang} />
              </div>

              <div className={css.gallery}>
                <Gallery lang={lang} views={countryDetails.views} />
              </div>
              <div className={css.rightBlock}>
                <Weather lang={lang} capital={country.capital.en} />
                <Currencies currency={country.currencyCode} />
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
        )
        : (
          <div style={{
            width: 'max-content',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          >
            <Preloader />
          </div>
        )}
    </div>
  );
};

export default CountryPage;
