import styles from './SmallScreen.module.css';
import { IMapProps } from '../../../../../Interfaces';
import { LeafletMap } from '../../../../shared';

const SmallScreenMap = (props: Omit<IMapProps, 'zoom' | 'styles'>) => (
  <>
    <div className={styles.mapWrapper}>
      <LeafletMap
        {...props}
        zoom={3}
        styles={{
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  </>
);

export default SmallScreenMap;
