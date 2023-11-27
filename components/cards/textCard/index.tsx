import Image, { StaticImageData } from 'next/image';
import classNames from 'classnames';
import Style from './textCard.module.scss';

type PropsCard = {
  image: StaticImageData;
  heading: string;
  text: string;
  backgroundBlue?: boolean;
};

function TextCard({ image, heading, text, backgroundBlue = false }: PropsCard) {
  return (
    <article className={classNames(Style.CardText, backgroundBlue ? Style.BackgroundBlue : Style.BackgroundWhite)}>
      <div>
        <Image src={image} alt={heading} />
        <h1>{heading}</h1>
      </div>
      <p>{text}</p>
    </article>
  );
}

type PropsDivCards = {
  textCard1: PropsCard;
  textCard2: PropsCard;
};

export default function DivTextCards({ textCard1, textCard2 }: PropsDivCards) {
  return (
    <div className={Style.InstituteDivCard}>
      <TextCard
        key={'left_card_text'}
        image={textCard1.image}
        heading={textCard1.heading}
        text={textCard1.text}
        backgroundBlue={textCard1.backgroundBlue}
      />
      <TextCard
        key={'right_card_text'}
        image={textCard2.image}
        heading={textCard2.heading}
        text={textCard2.text}
        backgroundBlue={textCard2.backgroundBlue}
      />
    </div>
  );
}
