import Image, { StaticImageData } from 'next/image';
import classNames from 'classnames';
import Style from './usageCard.module.scss';

type PropsUsageCard = {
  image: StaticImageData;
  heading: string;
  style: string;
};

const Color: {
  default: string;
  vika: string;
  iio: string;
  rostelecom: string;
  gamedev: string;
  vrdev: string;
} = {
  default: Style.CardDefault,
  vika: Style.CardVika,
  iio: Style.CardIio,
  rostelecom: Style.CardRostelecom,
  gamedev: Style.CardGameDev,
  vrdev: Style.CardVrDev,
};

function UsageCard({ image, heading, style }: PropsUsageCard) {
  return (
    <article className={classNames(Style.usageCard, Color[style as keyof typeof Color])}>
      <Image src={image} alt={heading} />
      <h2>{heading}</h2>
    </article>
  );
}

type PropsUsage = {
  array: PropsUsageCard[];
};

export default function UsageCardTable({ array }: PropsUsage) {
  return (
    <div className={Style.usageCardSection}>
      {array.map((elem, index) => (
        <UsageCard key={'usage_card_' + index} image={elem.image} heading={elem.heading} style={elem.style} />
      ))}
    </div>
  );
}
