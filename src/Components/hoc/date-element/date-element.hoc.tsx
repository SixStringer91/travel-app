import React from 'react';
import { Card } from 'antd';

function DateElement<T>(Component:React.FC<T>) {
  return (props: T) => (
    <Card
      style={{ minWidth: '5rem', width: 'max-content' }}
      bordered
      bodyStyle={{ padding: '0.3rem', textAlign: 'center' }}
      size="small"
    >
      <Component {...props} />
    </Card>
  );
}
export default DateElement;
