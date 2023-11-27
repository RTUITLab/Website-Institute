import Image, { StaticImageData } from 'next/image';
import Style from './achievementCard.module.scss';

type PropsAchievementCard = {
  heading: string;
  text: string[];
  image: StaticImageData;
};

function AchievementCard({ heading, text, image }: PropsAchievementCard) {
  return (
    <article className={Style.AchievementCard}>
      <div>
        <h1>{heading}</h1>
        {text.map((elem, index) => (
          <h3 key={heading + '_' + index}>{elem}</h3>
        ))}
      </div>
      <Image src={image} alt={heading} />
    </article>
  );
}

type PropsDivAchievementCards = {
  array: PropsAchievementCard[];
};

export default function DivAchievementCards({ array }: PropsDivAchievementCards) {
  return (
    <div className={Style.AchievementDivCard}>
      <div>
        {array.map((elem, index) => {
          if (index % 2 === 0) {
            return <AchievementCard key={'left_achievement_card_' + index} heading={elem.heading} text={elem.text} image={elem.image} />;
          }
        })}
      </div>
      <div>
        {array.map((elem, index) => {
          if (index % 2 === 1) {
            return <AchievementCard key={'right_achievement_card_' + index} heading={elem.heading} text={elem.text} image={elem.image} />;
          }
        })}
      </div>
    </div>
  );
}
