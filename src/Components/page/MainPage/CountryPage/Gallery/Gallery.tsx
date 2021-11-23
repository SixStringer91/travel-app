import React from 'react';
import Slider, { Settings } from 'react-slick';
import styles from './Gallery.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
import { SliderImage } from '../../../../shared';
import { BigSliderElement, SmallSliderElement } from '../../../../hoc';
import { IViews, LangType } from '../../../../../Interfaces';

type GalleryProps = {
	views: IViews[];
	lang: LangType;
}

type GalleryState = {
	bigSlider: Slider | null;
	smallSlider: Slider | null
}

const Gallery = ({ views, lang }: GalleryProps) => {
  const bigSliderRef = React.useRef<Slider | null>(null);
  const smallSliderRef = React.useRef<Slider | null>(null);
  const [state, setState] = React.useState<GalleryState>({
    bigSlider: null,
    smallSlider: null
  });

  React.useEffect(() => {
    setState({
      bigSlider: bigSliderRef.current,
      smallSlider: smallSliderRef.current
    });
  }, []);

  const settingsMain:Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    swipeToSlide: true,
    asNavFor: state.smallSlider || undefined,
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

  const settingsThumbs:Settings = {
    className: styles.innerSlider,
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: state.bigSlider || undefined,
    arrows: false,
    dots: true,
    dotsClass: `slick-dots ${styles.slickDots}`,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px'
  };

  const bigSliderElements = React.useMemo(() => views.map((el) => {
    const Component = BigSliderElement(SliderImage, el.viewName[lang], el.about[lang]);
    return <Component name={el.viewName[lang]} url={el.imgURL} isBig />;
  }), [lang]);

  const smallSliderElements = React.useMemo(() => views.map((el) => {
    const Component = SmallSliderElement(SliderImage);
    return <Component name={el.viewName[lang]} url={el.imgURL} isBig={false} />;
  }), [lang]);

  return (
    <div className={styles.sliderWrapper}>
      <Slider
        {...settingsMain}
        ref={bigSliderRef}
      >
        {bigSliderElements}
      </Slider>
      <div className={styles.thumbnailSliderWrap}>
        <Slider
          {...settingsThumbs}
          ref={smallSliderRef}
        >
          {smallSliderElements}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
