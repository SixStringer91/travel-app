import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styles from './Gallery.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './slider.css';

const Gallery = (props: any) => {
  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);
  const [slider1, setSlider1] = useState<any>(null);
  const [slider2, setSlider2] = useState<any>(null);

  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);

  useEffect(() => {
    setNav2(slider2);
  }, [slider2]);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    arrowsClass: styles.arrowsClass,
    fade: true,
    swipeToSlide: true,
    asNavFor: nav1,
    speed: 600,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false
        }
      }
    ]

  };

  const settingsThumbs = {
    className: styles.innerSlider,
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: nav2,
    arrows: false,
    dots: true,
    dotsClass: `${styles.slickDots} slick-dots`,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px'

  };
  const { views, lang } = props;
  return (
    <div className={styles.sliderWrapper}>
      <Slider
        {...settingsMain}
        asNavFor={nav2}
        ref={(slider: any) => setSlider1(slider)}
      >
        {views.map((v: any) => (
          <div className={styles.slickSlide} key={v.viewName[lang]}>
            <h2 className={styles.slickSlideTitle}>{v.viewName[lang]}</h2>
            <img
              className={`${styles.slickSlideImage} ${styles.bigImage}`}
              src={`${v.imgURL}`}
              alt={`${v.viewName[lang]}`}
            />
            <div className={styles.slickSlideLabel}><span>{v.about[lang]}</span></div>
          </div>
        ))}
      </Slider>
      <div className={styles.thumbnailSliderWrap}>
        <Slider
          {...settingsThumbs}
          asNavFor={nav1}
          ref={(slider: any) => setSlider2(slider)}
        >
          {views.map((v: any) => (
            <div className={styles.slickSlide} key={v.viewName[lang]}>
              <img
                className={styles.slickSlideImage}
                src={`${v.imgURL}`}
                alt={`${v.viewName[lang]}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
