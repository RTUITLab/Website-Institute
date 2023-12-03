import Image, { StaticImageData } from 'next/image';
import { ButtonLinkDefault } from '@/components/buttons';
import Style from './imageAndTextCard.module.scss';

type Props = {
  reverse: boolean;
  image: StaticImageData;
  heading: string;
  text: string[];
  buttons:
    | null
    | {
        targetBlank: boolean;
        link: string;
        text: string;
      }[];
};

export default function ImageAndTextCard({ image, heading, text, buttons, reverse }: Props) {
  return (
    <div className={Style.LastCampusAndHostel}>
      {reverse ? <Image src={image} alt={heading} /> : <></>}
      <div>
        <h1>{heading}</h1>
        {text.map((elem, index) => (
          <p key={heading + '_' + index}>{elem}</p>
        ))}
        {buttons === null ? (
          <></>
        ) : (
          <div>
            {buttons.map((elem, index) => (
              <ButtonLinkDefault key={heading + '_button_' + index} link={elem.link} text={elem.text} targetBlank={elem.targetBlank} />
            ))}
          </div>
        )}
      </div>
      {reverse ? <></> : <Image src={image} alt={heading} />}
    </div>
  );
}
