import { Modal } from 'antd';
import { IMapProps } from '../../../../../Interfaces';
import { LeafletMap } from '../../../../shared';

interface IFullScreenMapProps extends Omit<IMapProps, 'zoom' | 'styles'> {
	mapHandleClick: () => void
}
const FullScreenMap = (props: IFullScreenMapProps) => {
  const { mapHandleClick } = props;
  const styles = {
    width: '100%',
    height: '70vh'
  };

  return (
    <Modal
      closable={false}
      bodyStyle={{ padding: '0' }}
      width={1000}
      centered
      visible
      footer={null}
      maskClosable
      onCancel={mapHandleClick}
    >
      <LeafletMap {...props} zoom={5} styles={styles} />
    </Modal>
  );
};

export default FullScreenMap;
