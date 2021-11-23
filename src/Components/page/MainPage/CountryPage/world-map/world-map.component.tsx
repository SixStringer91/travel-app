import { Modal } from 'antd';
import { CSSProperties } from 'react';
import { connect } from 'react-redux';
import { ICapitalProp, IMapCoords, LangType } from '../../../../../Interfaces';
import { RootState } from '../../../../../redux/Store';
import { LeafletMap } from '../../../../shared';
import styles from './world-map.module.css';

interface MapContainerProps {
  nameEN: string;
  capital: ICapitalProp;
  toggleFullscreen: () => void
  isFullscreen: boolean
}

interface MapProps extends MapContainerProps {
  lang: LangType;
  mapCoords: IMapCoords;
}

const WorldMap = ({
  lang, mapCoords, nameEN, capital, isFullscreen, toggleFullscreen
}: MapProps) => {
  const mapProps = {
    countryCapital: capital[lang],
    countryName: nameEN,
    mapCoords
  };

  const modalProps = {
    closable: false,
    bodyStyle: { padding: '0' } as CSSProperties,
    width: 1000,
    centered: true,
    visible: true,
    footer: null,
    maskClosable: true,
    onCancel: toggleFullscreen
  };

  return (
    <>
      {isFullscreen ? (
        <div className={styles.mapWrapper}>
          <LeafletMap
            {...mapProps}
            zoom={3}
            styles={{ width: '100%', height: '100%' }}
          />
        </div>
      ) : (
        <Modal {...modalProps}>
          <LeafletMap
            {...mapProps}
            zoom={5}
            styles={{ width: '100%', height: '70vh' }}
          />
        </Modal>
      )}
    </>
  );
};

const mapState = (
  {
    language: { lang },
    countryPage: {
      data: { details: { mapCoords } }
    }
  }: RootState,
  { nameEN, capital, isFullscreen }: MapContainerProps
) => ({
  lang,
  mapCoords,
  nameEN,
  capital,
  isFullscreen
});

export default connect(mapState)(WorldMap);
