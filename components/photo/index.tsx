'use client';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import ArrowLeft from '@/public/svg/arrow-left-01-round.svg';
import ArrowRight from '@/public/svg/arrow-right-01-round.svg';
import classNames from 'classnames';
import Style from './photo.module.scss';
import ScrollContainer from 'react-indiana-drag-scroll';

type Props = {
  images: StaticImageData[];
};

export default function PhotoSection({ images }: Props) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const Left = () => {
    if (currentImage === 0) {
      return images.length - 1;
    } else {
      return currentImage - 1;
    }
  };

  const Right = () => {
    if (currentImage + 1 === images.length) {
      return 0;
    } else {
      return currentImage + 1;
    }
  };

  return (
    <div className={Style.SectionPhoto}>
      <article>
        <Image src={images[currentImage]} alt={'фотография_' + currentImage} />
        <button className={classNames(Style.Button, Style.Left)} onClick={() => setCurrentImage(Left)}>
          <Image src={ArrowLeft} alt={'стрелка_влево'} />
        </button>
        <button className={classNames(Style.Button, Style.Right)} onClick={() => setCurrentImage(Right)}>
          <Image src={ArrowRight} alt={'стрелка_вправо'} />
        </button>
      </article>
      <ScrollContainer>
        {images.map((elem, index) => (
          <button
            className={classNames(Style.ButtonSwitch, currentImage === index ? Style.ButtonActive : Style.ButtonNoActive)}
            key={'mini_button_' + index}
            onClick={() => setCurrentImage(index)}>
            <Image key={'mini_photo_' + index} src={elem} alt={'мини_фотография'} />
          </button>
        ))}
      </ScrollContainer>
    </div>
  );
}
