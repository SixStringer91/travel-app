import React from 'react';
import styles from './big-slider.module.css';

function BigSliderElement<T>(Component: React.FC<T>, name:string, about:string) {
  return (props:T) => (
    <div className={styles.slickSlide}>
      <h2 className={styles.slickSlideTitle}>{name}</h2>
      <Component {...props} />
      <div className={styles.slickSlideLabel}>
        <span>{about}</span>
      </div>
    </div>
  );
}
export default BigSliderElement;
