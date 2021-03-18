import React, { useState } from 'react';
import { FullscreenOutlined } from '@ant-design/icons';
import { Typography, Spin } from 'antd';
import css from './CountryPage.module.css';
import SmallScreenMap from './Map/SmallMap/SmallScreenMap';
import FullScreenMap from './Map/BigMap/FullScreenMap';
import Currencies from './Currencies/Currencies';
import Weather from './Weather/Weather';
import Gallery from './Gallery/Gallery';
import Video from './Video/Video';
import DateAndTime from './Date/DateAndTime';

const { Text } = Typography;

const CountryPage = ({ link, lang, country, setSearchIsDisabled, fetchDetails, fetchDetailsWithoutState, fetchDeleteDetails, countryDetails, loading }: any) => {
  const [isFullScreen, setIsFullScreen] = useState(true);
  function handleClick() {
    !isFullScreen ? setIsFullScreen(true) : setIsFullScreen(false);
  }

  React.useEffect(() => {
    setSearchIsDisabled()
    country !== null
      ?
      fetchDetails(country.nameEN)
      :
      fetchDetailsWithoutState(link)
    return () => {
      console.log('deleted');
      fetchDeleteDetails()
    }
  }, []);



  return (<div className={css.wrapper}>
    {!loading
      ? <>
        <div className={css.upperContent} >
          <div className={css.leftBlock} >
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type="button" onClick={handleClick} ><FullscreenOutlined /></button>
            {isFullScreen
              ? <SmallScreenMap
                countryCapital={country.capital[lang]}
                countryName={country.nameEN}
                mapCoords={countryDetails.mapCoords} />
              : <FullScreenMap
                countryCapital={country.capital[lang]}
                countryName={country.nameEN}
                mapCoords={countryDetails.mapCoords} />}

            <DateAndTime city={country.capital.en} lang={lang} />
          </div>

          <div className={css.gallery}><Gallery lang={lang} views={countryDetails.views} /></div>
          <div className={css.rightBlock}>
            <Weather lang={lang} capital={country.capital.en} />
            <Currencies currency={country.currencyCode} />
          </div>
        </div>
        <div className={css.bottomBlock}><div className={css.video}><Video url={countryDetails.videoURL} /></div><div className={css.info}><Text>{countryDetails.info[lang]}</Text></div></div>
      </>
      :
      <div className={css.preloader}><Spin size="large" /></div>
    }
  </div>
  );
};

export default CountryPage;