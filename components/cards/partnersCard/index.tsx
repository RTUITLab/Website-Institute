import Image, { StaticImageData } from 'next/image';
import Style from './partnersCard.module.scss';

type PropsPartnersCard = {
  image: StaticImageData;
  heading: string;
  text: string;
  indexGrid: number;
};

function PartnersCard({ image, heading, text, indexGrid }: PropsPartnersCard) {
  return (
    <article className={Style.PartnersCard} style={{ gridArea: 'cell-' + indexGrid }}>
      <Image src={image} alt={heading} />
      <div>
        <h1>{heading}</h1>
        <h2>{text}</h2>
      </div>
    </article>
  );
}

type PropsPartnersCards = {
  image: StaticImageData;
  heading: string;
  text: string;
};

type PropsDivPartnersCards = {
  element1: PropsPartnersCards;
  element2: PropsPartnersCards;
  element3: PropsPartnersCards;
  element4: PropsPartnersCards;
  element5: PropsPartnersCards;
};

export default function DivPartnersCards({ element1, element2, element3, element4, element5 }: PropsDivPartnersCards) {
  return (
    <div className={Style.PartnersDivGrid}>
      <PartnersCard image={element1.image} heading={element1.heading} text={element1.text} indexGrid={1} />
      <PartnersCard image={element2.image} heading={element2.heading} text={element2.text} indexGrid={2} />
      <PartnersCard image={element3.image} heading={element3.heading} text={element3.text} indexGrid={3} />
      <PartnersCard image={element4.image} heading={element4.heading} text={element4.text} indexGrid={4} />
      <PartnersCard image={element5.image} heading={element5.heading} text={element5.text} indexGrid={5} />
    </div>
  );
}
