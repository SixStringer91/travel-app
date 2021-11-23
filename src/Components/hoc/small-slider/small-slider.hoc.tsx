import React from 'react';
import styles from './small-slider.module.css';

function SmallSliderElement<T>(Component:React.FC<T>) {
  return (props: T) => (
    <div className={styles.slickSlide}>
      <Component {...props} />
    </div>
  );
}

export default SmallSliderElement;
