import React, { useState } from 'react';
import SmallScreenMap from './Map/SmallMap/SmallScreenMap';
import FullScreenMap from './Map/BigMap/FullScreenMap';
import './CountryPage.module.css';

const CountryPage = function (props: any) {
  const { country } = props;
  const { mapCoords } = country.details;
  const [isFullScreen, setIsFullScreen] = useState(false);

  function handleClick() {
      !isFullScreen ? setIsFullScreen(true) : setIsFullScreen(false);
  }
  return (
    <div>
      <img src={country.photo} alt="" />
      <div>
          <button type="button" onClick={handleClick}>[]</button>
          {isFullScreen
              ? <SmallScreenMap
                  countryCapital={country.capital}
                  countryName={country.name}
                  mapCoords={mapCoords}/>
              :  <FullScreenMap
                  countryCapital={country.capital}
                  countryName={country.name}
                  mapCoords={mapCoords}/>}

      </div>
    </div>
  );
};

export default CountryPage;
