import { CSSProperties } from 'react';

type SliderImageProps = {
	url: string;
	name: string
	isBig: boolean
}

const bigImage:CSSProperties = {
  margin: '0 auto',
  width: '90%',
  height: '500px',
  objectFit: 'cover',
  borderRadius: '8px'

};

const SliderImage = ({ url, name, isBig }:SliderImageProps) => (
  <img
    style={isBig ? { ...bigImage } : undefined}
    src={url}
    alt={name}
  />
);

export default SliderImage;
