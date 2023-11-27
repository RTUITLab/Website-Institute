import Image, { StaticImageData } from 'next/image';
import Style from './imageCard.module.scss';

type PropsImageCard = {
  image: StaticImageData;
  heading: string;
};

function ImageCard({ image, heading }: PropsImageCard) {
  return (
    <article className={Style.ImageCard}>
      <Image src={image} alt={heading} />
      <div>
        <h3>{heading}</h3>
      </div>
    </article>
  );
}

type PropsDivImageCards = {
  array: PropsImageCard[];
};

export default function DivImageCards({ array }: PropsDivImageCards) {
  return (
    <div className={Style.MissionDivCard}>
      {array.map((elem, index) => (
        <ImageCard image={elem.image} heading={elem.heading} key={'image_card_' + index} />
      ))}
    </div>
  );
}
